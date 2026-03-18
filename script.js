const _supabase = window.supabase.createClient(
    CONFIG.SUPABASE_URL,
    CONFIG.SUPABASE_KEY
);

let count = 0;

function incrementWork() {
    count++;
    const display = document.getElementById('workCount');
    display.innerText = count;

    display.style.background = '#C5192D';
    display.style.color = 'white';

    setTimeout(() => {
        display.style.background = '#fdf0f1';
        display.style.color = '#C5192D';
    }, 300);
}

async function finalizarDia() {
    const trabalho = document.getElementById('workCount').innerText;

    const bloco2 = Array.from(document.querySelectorAll('#bloco2 input:checked'))
        .map(i => i.closest('.cb-container').querySelector('.label-text').innerText)
        .join(', ');

    const bloco3 = Array.from(document.querySelectorAll('#bloco3 input:checked'))
        .map(i => i.closest('.cb-container').querySelector('.label-text').innerText)
        .join(', ');

    const { error } = await _supabase
        .from('history')
        .insert([
            {
                job: parseInt(trabalho),
                primary: bloco2,
                secondary: bloco3
            }
        ]);

    if (error) {
        console.error("Failed to save:", error);
        alert("Erro: " + error.message);
    } else {
        alert("Progresso salvo! 🇨🇦");

        count = 0;
        document.getElementById('workCount').innerText = count;

        document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
        atualizarBarraProgresso();
    }
}

function renderizar(dados) {
    const display = document.getElementById('display-resultado');

    if (!dados || dados.length === 0) {
        display.innerHTML = "❌ Nenhum registro encontrado.";
        return;
    }

    const agrupado = {};

    dados.forEach(item => {
        const data = new Date(item.created_at).toLocaleDateString('pt-BR');

        if (!agrupado[data]) {
            agrupado[data] = {
                job: 0,
                primary: [],
                secondary: []
            };
        }

        agrupado[data].job += item.job || 0;

        if (item.primary) {
            agrupado[data].primary.push(item.primary);
        }

        if (item.secondary) {
            agrupado[data].secondary.push(item.secondary);
        }
    });

    display.innerHTML = Object.keys(agrupado).map(data => {
        const item = agrupado[data];

        return `
            <div style="margin-bottom: 15px; border-bottom: 1px solid #eee; padding-bottom: 10px;">
                <strong style="color: #C5192D;">📅 ${data}</strong><br>
                <strong>📈 Job:</strong> ${item.job} tasks<br>
                <strong>✅ Main:</strong> ${[...new Set(item.primary)].join(', ') || 'Nenhum'}<br>
                <strong>🌲 Secondary:</strong> ${[...new Set(item.secondary)].join(', ') || 'Nenhum'}
            </div>
        `;
    }).join('');
}

async function carregarDiaAnterior() {
    const ontem = new Date();
    ontem.setDate(ontem.getDate() - 1);
    const dataFormatada = ontem.toISOString().split('T')[0];

    const { data } = await _supabase
        .from('history')
        .select('*')
        .gte('created_at', `${dataFormatada}T00:00:00`)
        .lte('created_at', `${dataFormatada}T23:59:59`);

    renderizar(data);
}

async function buscarDataEspecifica() {
    const dataBusca = document.getElementById('filtroData').value;

    if (!dataBusca) return alert("Selecione uma data!");

    const { data } = await _supabase
        .from('history')
        .select('*')
        .gte('created_at', `${dataBusca}T00:00:00`)
        .lte('created_at', `${dataBusca}T23:59:59`);

    renderizar(data);
}

async function buscarPeriodo() {
    const inicio = document.getElementById('dataInicio').value;
    const fim = document.getElementById('dataFim').value;

    if (!inicio || !fim) return alert("Selecione as duas datas!");

    const { data } = await _supabase
        .from('history')
        .select('*')
        .gte('created_at', `${inicio}T00:00:00`)
        .lte('created_at', `${fim}T23:59:59`)
        .order('created_at', { ascending: false });

    renderizar(data);
}

function atualizarBarraProgresso() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const marcados = document.querySelectorAll('input[type="checkbox"]:checked');

    const porcentagem = Math.round((marcados.length / checkboxes.length) * 100);

    document.getElementById('progress-bar').style.width = `${porcentagem}%`;
    document.getElementById('progress-text').innerText = `${porcentagem}%`;
}

async function carregarProgressoHoje() {
    const hoje = new Date().toISOString().split('T')[0];

    const { data } = await _supabase
        .from('history')
        .select('*')
        .gte('created_at', `${hoje}T00:00:00`)
        .lte('created_at', `${hoje}T23:59:59`);

    if (data && data.length > 0) {

        let totalJob = 0;
        let primaryItens = [];
        let secondaryItens = [];

        data.forEach(registro => {
            totalJob += registro.job || 0;

            if (registro.primary) {
                primaryItens.push(...registro.primary.split(', '));
            }

            if (registro.secondary) {
                secondaryItens.push(...registro.secondary.split(', '));
            }
        });

        count = totalJob;
        document.getElementById('workCount').innerText = count;

        primaryItens = [...new Set(primaryItens)];
        secondaryItens = [...new Set(secondaryItens)];

        document.querySelectorAll('#bloco2 .label-text').forEach(span => {
            if (primaryItens.includes(span.innerText.trim())) {
                span.closest('.cb-container').querySelector('input').checked = true;
            }
        });

        document.querySelectorAll('#bloco3 .label-text').forEach(span => {
            if (secondaryItens.includes(span.innerText.trim())) {
                span.closest('.cb-container').querySelector('input').checked = true;
            }
        });

        atualizarBarraProgresso();
    }
}

document.addEventListener('change', (e) => {
    if (e.target.type === 'checkbox') {
        atualizarBarraProgresso();
    }
});

window.onload = () => {
    carregarDiaAnterior();
    carregarProgressoHoje();
};