/* =====================================================
   Growth Hub — App Logic
   Mock data, page templates, charts, modal & toast.
   ===================================================== */

// ========================================================
// MOCK DATA
// ========================================================
const mockData = {
    dashboard: {
        kpis: {
            revenue:        { value: 'R$ 87.430,00', trend: '+18.2%', dir: 'up',   label: 'Faturamento via Marketing', sub: 'vs. mês anterior' },
            orders:         { value: '1.284',         trend: '+12.4%', dir: 'up',   label: 'Pedidos (Atribuídos)',       sub: 'últimos 30 dias' },
            conversion:     { value: '4.6%',          trend: '+0.8 p.p.', dir: 'up',label: 'Taxa de Conversão',          sub: 'visitas → pedido' },
            ticket:         { value: 'R$ 68,10',      trend: '+5.1%',  dir: 'up',   label: 'Ticket Médio',               sub: 'pedidos pagos' },
            adSpend:        { value: 'R$ 9.840,00',   trend: '-3.2%',  dir: 'down', label: 'Investimento em Mídia',      sub: 'eficiência subiu' },
            roas:           { value: '8.9x',          trend: '+1.4x',  dir: 'up',   label: 'ROAS Geral',                 sub: 'retorno sobre mídia' },
        },
        topCampaigns: [
            { name: 'Retargeting Instagram', spend: 850,  conv: 145, roas: '6.4x' },
            { name: 'Busca Delivery Local',  spend: 1200, conv: 210, roas: '5.1x' },
            { name: 'Lookalike VIPs',        spend: 400,  conv: 65,  roas: '4.8x' },
            { name: 'Carrinho Abandonado',   spend: 220,  conv: 88,  roas: '12.3x' },
        ],
        activity: [
            { icon: 'ph-megaphone',     title: 'Campanha "Promo Almoço" pausada automaticamente', desc: 'Orçamento diário atingido às 14:32.', time: 'há 12 min' },
            { icon: 'ph-trend-up',      title: 'ROAS da campanha "Retargeting Instagram" subiu', desc: 'De 5.1x para 6.4x nas últimas 24h.', time: 'há 1 h' },
            { icon: 'ph-users-three',   title: 'Novo público "Lookalike Pizzas" pronto', desc: '12.430 pessoas. Pronto para uso.', time: 'há 3 h' },
            { icon: 'ph-warning',       title: 'Pixel do Meta com 1 evento sem disparo', desc: 'Verifique o evento "Purchase" no checkout.', time: 'há 5 h' },
            { icon: 'ph-rocket-launch', title: 'Campanha "WhatsApp Recompra" iniciada', desc: 'Disparo agendado para 18:00.', time: 'há 8 h' },
        ],
        alerts: [
            { type: 'success', icon: 'ph-trophy',  title: 'Recorde mensal!',     msg: 'Você bateu o maior faturamento via marketing dos últimos 6 meses.' },
            { type: 'warning', icon: 'ph-warning', title: 'CPC acima do habitual', msg: 'O CPC do Google Ads está 22% acima da média. Sugestão: revisar palavras-chave.' },
        ]
    },

    analytics: {
        kpis: {
            impressions: { value: '1.452.300', trend: '+9.4%',   dir: 'up',   label: 'Impressões' },
            clicks:      { value: '124.840',   trend: '+14.1%',  dir: 'up',   label: 'Cliques' },
            ctr:         { value: '8.6%',      trend: '+0.5 p.p.', dir: 'up', label: 'CTR Médio' },
            cpc:         { value: 'R$ 0,79',   trend: '-6.8%',   dir: 'down', label: 'CPC Médio' },
            cpa:         { value: 'R$ 7,66',   trend: '-12.3%',  dir: 'down', label: 'CPA Médio' },
            roas:        { value: '8.9x',      trend: '+1.4x',   dir: 'up',   label: 'ROAS' },
        },
        funnel: [
            { name: 'Impressões',         desc: 'Visualizações dos anúncios',  value: 1452300, rate: '100%' },
            { name: 'Cliques',            desc: 'Tráfego para o cardápio',     value: 124840,  rate: '8.6%'  },
            { name: 'Adições ao Carrinho',desc: 'Iniciaram pedido',            value: 31250,   rate: '25.0%' },
            { name: 'Checkout Iniciado',  desc: 'Foram para pagamento',        value: 9870,    rate: '31.6%' },
            { name: 'Pedidos Concluídos', desc: 'Conversão final',             value: 5732,    rate: '58.1%' },
        ],
        topProducts: [
            { name: 'Pizza Calabresa Família',     orders: 412, revenue: 28840 },
            { name: 'Combo Burguer Duplo + Fritas', orders: 386, revenue: 17370 },
            { name: 'Sushi Combo 30 peças',         orders: 298, revenue: 24980 },
            { name: 'Lasanha à Bolonhesa',          orders: 271, revenue: 13550 },
            { name: 'Açaí 700ml com 5 acomp.',      orders: 254, revenue: 8636  },
        ],
        channels: [
            { name: 'Meta Ads',   value: 38 },
            { name: 'Google Ads', value: 27 },
            { name: 'Direto',     value: 14 },
            { name: 'WhatsApp',   value: 11 },
            { name: 'TikTok Ads', value: 6  },
            { name: 'E-mail',     value: 4  },
        ]
    },

    campaigns: [
        { id: 1, name: 'Retargeting Instagram',     platform: 'Meta Ads',   icon: 'ph-instagram-logo', color: '#e4405f', status: 'Ativa',     spend: 850,  budget: 1000, roas: '6.4x', conversions: 145, ctr: '9.2%' },
        { id: 2, name: 'Busca Delivery Local',      platform: 'Google Ads', icon: 'ph-google-logo',    color: '#ea4335', status: 'Ativa',     spend: 1200, budget: 1500, roas: '5.1x', conversions: 210, ctr: '7.4%' },
        { id: 3, name: 'Lookalike Clientes VIP',    platform: 'Meta Ads',   icon: 'ph-facebook-logo',  color: '#3b5998', status: 'Ativa',     spend: 400,  budget: 500,  roas: '4.8x', conversions: 65,  ctr: '6.8%' },
        { id: 4, name: 'Carrinho Abandonado',       platform: 'WhatsApp',   icon: 'ph-whatsapp-logo',  color: '#25d366', status: 'Ativa',     spend: 220,  budget: 300,  roas: '12.3x',conversions: 88,  ctr: '21.5%' },
        { id: 5, name: 'Promo Fim de Semana',       platform: 'Meta Ads',   icon: 'ph-instagram-logo', color: '#e4405f', status: 'Pausada',   spend: 0,    budget: 800,  roas: '-',    conversions: 0,   ctr: '-' },
        { id: 6, name: 'Lançamento TikTok Combos',  platform: 'TikTok Ads', icon: 'ph-tiktok-logo',    color: '#000000', status: 'Agendada',  spend: 0,    budget: 600,  roas: '-',    conversions: 0,   ctr: '-' },
        { id: 7, name: 'Recompra Clientes Antigos', platform: 'E-mail',     icon: 'ph-envelope',       color: '#0ea5e9', status: 'Rascunho',  spend: 0,    budget: 150,  roas: '-',    conversions: 0,   ctr: '-' },
        { id: 8, name: 'Aniversário Dellivery',     platform: 'Google Ads', icon: 'ph-google-logo',    color: '#ea4335', status: 'Encerrada', spend: 1850, budget: 2000, roas: '7.2x', conversions: 312, ctr: '8.9%' },
    ],

    audience: {
        kpis: {
            total:    { value: '18.430', trend: '+342',  dir: 'up',   label: 'Clientes Cadastrados' },
            active:   { value: '7.890',  trend: '+12.5%',dir: 'up',   label: 'Clientes Ativos (30d)' },
            newUsers: { value: '512',    trend: '+8.1%', dir: 'up',   label: 'Novos no Mês' },
            ltv:      { value: 'R$ 412', trend: '+R$ 24',dir: 'up',   label: 'LTV Médio' },
        },
        segments: [
            { name: 'VIPs',      desc: '+5 pedidos/mês',                 percent: 12, color: 'var(--primary)',    count: 2212 },
            { name: 'Regulares', desc: '2 a 4 pedidos/mês',              percent: 45, color: 'var(--secondary)',  count: 8294 },
            { name: 'Novos',     desc: '1º pedido nos últimos 30 dias',  percent: 28, color: 'var(--info)',       count: 5160 },
            { name: 'Em Risco',  desc: 'Sem pedido > 60 dias',           percent: 15, color: 'var(--danger)',     count: 2764 },
        ],
        cities: [
            { name: 'São Paulo, SP',     orders: 4218, percent: 38 },
            { name: 'Rio de Janeiro, RJ',orders: 2940, percent: 26 },
            { name: 'Belo Horizonte, MG',orders: 1612, percent: 14 },
            { name: 'Curitiba, PR',      orders: 1023, percent: 9  },
            { name: 'Porto Alegre, RS',  orders: 845,  percent: 7  },
            { name: 'Outras cidades',    orders: 692,  percent: 6  },
        ],
        topCustomers: [
            { name: 'Mariana Souza',  email: 'mariana.souza@email.com',  orders: 32, total: 'R$ 2.840', tag: 'VIP' },
            { name: 'Carlos Almeida', email: 'carlos.almeida@email.com', orders: 28, total: 'R$ 2.510', tag: 'VIP' },
            { name: 'Juliana Pereira',email: 'juliana.p@email.com',      orders: 24, total: 'R$ 2.180', tag: 'VIP' },
            { name: 'Rafael Lima',    email: 'rafael.lima@email.com',    orders: 19, total: 'R$ 1.690', tag: 'Regular' },
            { name: 'Amanda Costa',   email: 'amanda.costa@email.com',   orders: 17, total: 'R$ 1.430', tag: 'Regular' },
        ],
        ageGroups: [
            { label: '18-24', value: 14 },
            { label: '25-34', value: 36 },
            { label: '35-44', value: 28 },
            { label: '45-54', value: 14 },
            { label: '55+',   value: 8  },
        ]
    },

    settings: {
        profile: {
            company: 'Pizzaria Sabor da Terra',
            owner: 'Admin Dellivery',
            email: 'contato@sabordaterra.com.br',
            phone: '(11) 98765-4321',
            timezone: 'America/Sao_Paulo'
        },
        team: [
            { name: 'Admin Dellivery', email: 'admin@sabordaterra.com.br', role: 'Proprietário', initials: 'AD' },
            { name: 'Bruna Martins',   email: 'bruna@sabordaterra.com.br', role: 'Marketing',     initials: 'BM' },
            { name: 'Pedro Ramos',     email: 'pedro@sabordaterra.com.br', role: 'Operações',     initials: 'PR' },
            { name: 'Lívia Tavares',   email: 'livia@sabordaterra.com.br', role: 'Financeiro',    initials: 'LT' },
        ],
        notifications: [
            { id: 'n1', label: 'Nova venda atribuída a campanha',     desc: 'Notificações em tempo real para conversões.',          on: true  },
            { id: 'n2', label: 'Orçamento de campanha atingido',      desc: 'Avisar quando 90% do orçamento for utilizado.',         on: true  },
            { id: 'n3', label: 'Queda de performance',                desc: 'Alertar quando ROAS cair mais de 20% em 24h.',          on: true  },
            { id: 'n4', label: 'Resumo semanal por e-mail',           desc: 'Toda segunda-feira às 09:00.',                          on: false },
            { id: 'n5', label: 'Sugestões de otimização da IA',       desc: 'Receber recomendações automáticas baseadas em dados.',  on: true  },
        ],
        plan: {
            name: 'Growth Pro',
            price: 'R$ 199',
            period: '/mês',
            renew: 'Renova em 14 de Junho de 2026',
            features: [
                'Campanhas ilimitadas',
                'Integrações com Meta, Google, TikTok e WhatsApp',
                'Relatórios avançados e atribuição multi-canal',
                'IA de otimização de orçamento',
                'Suporte prioritário 24/7',
            ]
        }
    }
};

// Active state for "Campanhas" filter chips
let activeCampaignFilter = 'Todas';
// Active tab for Settings page
let activeSettingsTab = 'profile';

// ========================================================
// HELPERS
// ========================================================
const fmtBRL = (n) => n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0 });
const fmtNum = (n) => n.toLocaleString('pt-BR');
const statusClass = (s) => ({
    'Ativa': 'status-active',
    'Pausada': 'status-paused',
    'Encerrada': 'status-ended',
    'Rascunho': 'status-draft',
    'Agendada': 'status-scheduled'
}[s] || 'status-ended');

// ========================================================
// PAGE TEMPLATES
// ========================================================
const pages = {
    /* -------- DASHBOARD / VISÃO GERAL -------- */
    dashboard: () => {
        const k = mockData.dashboard.kpis;
        const kpiCard = (icon, type, k) => `
            <div class="card stat-card">
                <div class="stat-icon ${type}"><i class="ph ${icon}"></i></div>
                <div class="stat-details">
                    <h3>${k.label}</h3>
                    <div class="value">${k.value}</div>
                    <div class="trend ${k.dir}">
                        <i class="ph ${k.dir === 'up' ? 'ph-trend-up' : 'ph-trend-down'}"></i>
                        ${k.trend}<span class="since">${k.sub || ''}</span>
                    </div>
                </div>
            </div>`;

        const alertsHtml = mockData.dashboard.alerts.map(a => `
            <div class="alert ${a.type}">
                <i class="ph ${a.icon}"></i>
                <div class="alert-body">
                    <strong>${a.title}</strong>
                    <p>${a.msg}</p>
                </div>
            </div>`).join('');

        const topCampaignsHtml = mockData.dashboard.topCampaigns.map(c => `
            <div class="bar-row">
                <div class="bar-row-head">
                    <strong>${c.name}</strong>
                    <span class="bar-value">${fmtBRL(c.spend)} • ${c.conv} conv • <strong class="text-success">${c.roas}</strong></span>
                </div>
                <div class="bar-track"><div class="bar-fill" style="width: ${Math.min(100, c.conv / 2.2)}%;"></div></div>
            </div>`).join('');

        const activityHtml = mockData.dashboard.activity.map(a => `
            <li>
                <div class="tl-icon"><i class="ph ${a.icon}"></i></div>
                <div class="tl-body">
                    <strong>${a.title}</strong>
                    <p>${a.desc}</p>
                    <small>${a.time}</small>
                </div>
            </li>`).join('');

        return `
        <div class="page-enter">
            ${alertsHtml}

            <div class="stats-grid">
                ${kpiCard('ph-currency-dollar',  'success',   k.revenue)}
                ${kpiCard('ph-shopping-bag',     'primary',   k.orders)}
                ${kpiCard('ph-target',           'warning',   k.conversion)}
                ${kpiCard('ph-receipt',          'info',      k.ticket)}
                ${kpiCard('ph-megaphone',        'secondary', k.adSpend)}
                ${kpiCard('ph-rocket-launch',    'danger',    k.roas)}
            </div>

            <div class="charts-grid">
                <div class="card">
                    <div class="card-header">
                        <div>
                            <h2>Faturamento &amp; Conversões</h2>
                            <span class="card-subtitle">Últimos 7 dias</span>
                        </div>
                        <div class="filter-chips" style="margin-bottom:0;">
                            <button class="chip active">7D</button>
                            <button class="chip">30D</button>
                            <button class="chip">90D</button>
                        </div>
                    </div>
                    <div class="chart-container"><canvas id="mainChart"></canvas></div>
                </div>
                <div class="card">
                    <div class="card-header"><h2>Origem do Tráfego</h2></div>
                    <div class="chart-container compact"><canvas id="doughnutChart"></canvas></div>
                </div>
            </div>

            <div class="charts-grid equal">
                <div class="card">
                    <div class="card-header">
                        <div>
                            <h2>Top campanhas (ROAS)</h2>
                            <span class="card-subtitle">Performance dos últimos 30 dias</span>
                        </div>
                        <a href="#" class="btn btn-ghost btn-sm" data-go="campaigns">Ver todas <i class="ph ph-arrow-right"></i></a>
                    </div>
                    <div>${topCampaignsHtml}</div>
                </div>
                <div class="card">
                    <div class="card-header">
                        <h2>Atividade recente</h2>
                        <a href="#" class="btn btn-ghost btn-sm">Ver tudo</a>
                    </div>
                    <ul class="timeline">${activityHtml}</ul>
                </div>
            </div>
        </div>`;
    },

    /* -------- ANALYTICS -------- */
    analytics: () => {
        const k = mockData.analytics.kpis;
        const kpiCard = (icon, type, k) => `
            <div class="card stat-card">
                <div class="stat-icon ${type}"><i class="ph ${icon}"></i></div>
                <div class="stat-details">
                    <h3>${k.label}</h3>
                    <div class="value">${k.value}</div>
                    <div class="trend ${k.dir}">
                        <i class="ph ${k.dir === 'up' ? 'ph-trend-up' : 'ph-trend-down'}"></i>
                        ${k.trend}
                    </div>
                </div>
            </div>`;

        const funnelHtml = mockData.analytics.funnel.map((s) => `
            <div class="funnel-stage">
                <div class="funnel-info">
                    <span class="funnel-name">${s.name}</span>
                    <span class="funnel-desc">${s.desc}</span>
                </div>
                <div style="text-align:right;">
                    <div class="funnel-value">${fmtNum(s.value)}</div>
                    <div class="funnel-rate">${s.rate}</div>
                </div>
            </div>`).join('');

        const productsHtml = mockData.analytics.topProducts.map((p, i) => `
            <li>
                <div class="label-block">
                    <strong>#${i+1} ${p.name}</strong>
                    <span>${p.orders} pedidos</span>
                </div>
                <div class="value-block">
                    <div class="num">${fmtBRL(p.revenue)}</div>
                    <div class="sub">faturamento</div>
                </div>
            </li>`).join('');

        return `
        <div class="page-enter">
            <div class="card-header" style="margin-bottom:1rem;">
                <div>
                    <h2 style="margin-bottom:0;">Indicadores de performance</h2>
                    <span class="card-subtitle">Atualizado há poucos segundos</span>
                </div>
                <div class="filter-chips" style="margin-bottom:0;">
                    <button class="chip">Hoje</button>
                    <button class="chip active">7 dias</button>
                    <button class="chip">30 dias</button>
                    <button class="chip">90 dias</button>
                    <button class="chip"><i class="ph ph-calendar-blank"></i> Personalizado</button>
                </div>
            </div>

            <div class="stats-grid">
                ${kpiCard('ph-eye',            'info',      k.impressions)}
                ${kpiCard('ph-cursor-click',   'primary',   k.clicks)}
                ${kpiCard('ph-percent',        'success',   k.ctr)}
                ${kpiCard('ph-currency-dollar','warning',   k.cpc)}
                ${kpiCard('ph-target',         'secondary', k.cpa)}
                ${kpiCard('ph-rocket-launch',  'danger',    k.roas)}
            </div>

            <div class="charts-grid">
                <div class="card">
                    <div class="card-header"><h2>Receita vs. Investimento</h2></div>
                    <div class="chart-container"><canvas id="revenueChart"></canvas></div>
                </div>
                <div class="card">
                    <div class="card-header"><h2>Receita por Canal</h2></div>
                    <div class="chart-container compact"><canvas id="channelChart"></canvas></div>
                </div>
            </div>

            <div class="card" style="margin-bottom:1.5rem;">
                <div class="card-header">
                    <div>
                        <h2>Funil de conversão detalhado</h2>
                        <span class="card-subtitle">Da impressão à venda concluída</span>
                    </div>
                    <button class="btn btn-outline btn-sm"><i class="ph ph-download-simple"></i> Exportar</button>
                </div>
                <div class="funnel-container">${funnelHtml}</div>
            </div>

            <div class="charts-grid equal">
                <div class="card">
                    <div class="card-header">
                        <h2>Top produtos</h2>
                        <span class="card-subtitle">Por receita</span>
                    </div>
                    <ul class="list-clean">${productsHtml}</ul>
                </div>
                <div class="card">
                    <div class="card-header"><h2>Performance por horário</h2></div>
                    <div class="chart-container"><canvas id="hourlyChart"></canvas></div>
                </div>
            </div>
        </div>`;
    },

    /* -------- CAMPANHAS -------- */
    campaigns: () => {
        const filtered = activeCampaignFilter === 'Todas'
            ? mockData.campaigns
            : mockData.campaigns.filter(c => c.status === activeCampaignFilter);

        const totals = mockData.campaigns.reduce((acc, c) => {
            acc.spend += c.spend;
            acc.conv  += c.conversions;
            acc.active += c.status === 'Ativa' ? 1 : 0;
            return acc;
        }, { spend: 0, conv: 0, active: 0 });

        const counts = (s) => mockData.campaigns.filter(c => c.status === s).length;
        const chips = ['Todas', 'Ativa', 'Pausada', 'Agendada', 'Rascunho', 'Encerrada'];
        const chipsHtml = chips.map(s => `
            <button class="chip ${activeCampaignFilter === s ? 'active' : ''}" data-filter="${s}">
                ${s} <span class="count">${s === 'Todas' ? mockData.campaigns.length : counts(s)}</span>
            </button>`).join('');

        const rowsHtml = filtered.map(c => {
            const usagePct = c.budget ? Math.min(100, Math.round((c.spend / c.budget) * 100)) : 0;
            return `
                <tr>
                    <td>
                        <strong>${c.name}</strong>
                        <div style="font-size:0.7rem;color:var(--text-muted);margin-top:2px;">ID: #${c.id.toString().padStart(4,'0')}</div>
                    </td>
                    <td>
                        <span class="platform-pill" style="color:${c.color};">
                            <i class="ph ${c.icon}"></i> ${c.platform}
                        </span>
                    </td>
                    <td><span class="status-badge ${statusClass(c.status)}">${c.status}</span></td>
                    <td>
                        <div style="font-weight:500;">${fmtBRL(c.spend)} <small style="color:var(--text-muted);">/ ${fmtBRL(c.budget)}</small></div>
                        <div class="bar-track" style="margin-top:6px;height:4px;width:120px;">
                            <div class="bar-fill" style="width:${usagePct}%;"></div>
                        </div>
                    </td>
                    <td><strong>${fmtNum(c.conversions)}</strong></td>
                    <td>${c.ctr}</td>
                    <td><strong style="color:${c.roas !== '-' ? 'var(--success)' : 'var(--text-muted)'};">${c.roas}</strong></td>
                    <td>
                        <div class="table-actions">
                            <button class="icon-btn btn-icon" title="Ver"><i class="ph ph-chart-line"></i></button>
                            <button class="icon-btn btn-icon" title="Editar"><i class="ph ph-pencil-simple"></i></button>
                            <button class="icon-btn btn-icon" title="${c.status === 'Ativa' ? 'Pausar' : 'Ativar'}">
                                <i class="ph ${c.status === 'Ativa' ? 'ph-pause' : 'ph-play'}"></i>
                            </button>
                        </div>
                    </td>
                </tr>`;
        }).join('');

        return `
        <div class="page-enter">
            <div class="stats-grid">
                <div class="card stat-card">
                    <div class="stat-icon primary"><i class="ph ph-megaphone"></i></div>
                    <div class="stat-details">
                        <h3>Campanhas Ativas</h3>
                        <div class="value">${totals.active}</div>
                        <div class="trend up"><i class="ph ph-trend-up"></i> +2 este mês</div>
                    </div>
                </div>
                <div class="card stat-card">
                    <div class="stat-icon warning"><i class="ph ph-currency-dollar"></i></div>
                    <div class="stat-details">
                        <h3>Investimento Total</h3>
                        <div class="value">${fmtBRL(totals.spend)}</div>
                        <div class="trend down"><i class="ph ph-trend-down"></i> -3.2%</div>
                    </div>
                </div>
                <div class="card stat-card">
                    <div class="stat-icon success"><i class="ph ph-check-circle"></i></div>
                    <div class="stat-details">
                        <h3>Conversões Geradas</h3>
                        <div class="value">${fmtNum(totals.conv)}</div>
                        <div class="trend up"><i class="ph ph-trend-up"></i> +18.4%</div>
                    </div>
                </div>
                <div class="card stat-card">
                    <div class="stat-icon danger"><i class="ph ph-rocket-launch"></i></div>
                    <div class="stat-details">
                        <h3>ROAS Médio</h3>
                        <div class="value">7.2x</div>
                        <div class="trend up"><i class="ph ph-trend-up"></i> +1.1x</div>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <div>
                        <h2>Gerenciamento de campanhas</h2>
                        <span class="card-subtitle">Filtre, edite ou crie novas campanhas.</span>
                    </div>
                    <div style="display:flex;gap:0.5rem;">
                        <button class="btn btn-outline btn-sm"><i class="ph ph-funnel"></i> Filtros avançados</button>
                        <button class="btn btn-outline btn-sm"><i class="ph ph-download-simple"></i> Exportar CSV</button>
                        <button class="btn btn-primary btn-sm" id="open-new-campaign-inline"><i class="ph ph-plus"></i> Nova campanha</button>
                    </div>
                </div>

                <div class="filter-chips">${chipsHtml}</div>

                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Campanha</th>
                                <th>Plataforma</th>
                                <th>Status</th>
                                <th>Gasto / Orçamento</th>
                                <th>Conversões</th>
                                <th>CTR</th>
                                <th>ROAS</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>${rowsHtml || `<tr><td colspan="8" style="text-align:center;padding:2rem;color:var(--text-muted);">Nenhuma campanha neste filtro.</td></tr>`}</tbody>
                    </table>
                </div>
            </div>
        </div>`;
    },

    /* -------- PÚBLICO / AUDIENCE -------- */
    audience: () => {
        const k = mockData.audience.kpis;
        const kpiCard = (icon, type, k) => `
            <div class="card stat-card">
                <div class="stat-icon ${type}"><i class="ph ${icon}"></i></div>
                <div class="stat-details">
                    <h3>${k.label}</h3>
                    <div class="value">${k.value}</div>
                    <div class="trend ${k.dir}"><i class="ph ${k.dir === 'up' ? 'ph-trend-up' : 'ph-trend-down'}"></i> ${k.trend}</div>
                </div>
            </div>`;

        const segHtml = mockData.audience.segments.map(s => `
            <div class="bar-row">
                <div class="bar-row-head">
                    <strong>${s.name}</strong>
                    <span class="bar-value">${fmtNum(s.count)} clientes • <strong>${s.percent}%</strong></span>
                </div>
                <div class="bar-track">
                    <div class="bar-fill" style="width:${s.percent * 2}%; background:${s.color};"></div>
                </div>
                <small>${s.desc}</small>
            </div>`).join('');

        const citiesHtml = mockData.audience.cities.map(c => `
            <li>
                <div class="label-block">
                    <strong><i class="ph ph-map-pin" style="color:var(--primary);"></i> ${c.name}</strong>
                    <span>${fmtNum(c.orders)} pedidos</span>
                </div>
                <div class="value-block">
                    <div class="num">${c.percent}%</div>
                </div>
            </li>`).join('');

        const customersHtml = mockData.audience.topCustomers.map(c => {
            const initials = c.name.split(' ').map(n => n[0]).slice(0,2).join('');
            return `
                <tr>
                    <td>
                        <div style="display:flex;align-items:center;gap:0.75rem;">
                            <div class="avatar">${initials}</div>
                            <div>
                                <strong>${c.name}</strong>
                                <div style="font-size:0.75rem;color:var(--text-muted);">${c.email}</div>
                            </div>
                        </div>
                    </td>
                    <td>${c.orders}</td>
                    <td><strong>${c.total}</strong></td>
                    <td><span class="status-badge ${c.tag === 'VIP' ? 'status-active' : 'status-draft'}">${c.tag}</span></td>
                    <td>
                        <button class="btn btn-outline btn-sm"><i class="ph ph-paper-plane-tilt"></i> Contatar</button>
                    </td>
                </tr>`;
        }).join('');

        return `
        <div class="page-enter">
            <div class="stats-grid">
                ${kpiCard('ph-users-three', 'primary',   k.total)}
                ${kpiCard('ph-pulse',       'success',   k.active)}
                ${kpiCard('ph-user-plus',   'info',      k.newUsers)}
                ${kpiCard('ph-coins',       'warning',   k.ltv)}
            </div>

            <div class="charts-grid equal">
                <div class="card">
                    <div class="card-header"><h2>Aquisição vs. Retenção</h2></div>
                    <div class="chart-container"><canvas id="retentionChart"></canvas></div>
                </div>
                <div class="card">
                    <div class="card-header"><h2>Segmentação de clientes</h2></div>
                    <div>${segHtml}</div>
                </div>
            </div>

            <div class="charts-grid equal">
                <div class="card">
                    <div class="card-header"><h2>Faixa etária</h2></div>
                    <div class="chart-container compact"><canvas id="ageChart"></canvas></div>
                </div>
                <div class="card">
                    <div class="card-header"><h2>Distribuição geográfica</h2></div>
                    <ul class="list-clean">${citiesHtml}</ul>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <div>
                        <h2>Top clientes</h2>
                        <span class="card-subtitle">Maior LTV nos últimos 12 meses</span>
                    </div>
                    <button class="btn btn-outline btn-sm"><i class="ph ph-export"></i> Exportar lista</button>
                </div>
                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Cliente</th>
                                <th>Pedidos</th>
                                <th>Total gasto</th>
                                <th>Segmento</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>${customersHtml}</tbody>
                    </table>
                </div>
            </div>
        </div>`;
    },

    /* -------- CONFIGURAÇÕES -------- */
    settings: () => {
        const tabs = [
            { id: 'profile',       label: 'Perfil',         icon: 'ph-user-circle' },
            { id: 'integrations',  label: 'Integrações',    icon: 'ph-plugs-connected' },
            { id: 'notifications', label: 'Notificações',   icon: 'ph-bell' },
            { id: 'billing',       label: 'Plano & Cobrança',icon: 'ph-credit-card' },
            { id: 'team',          label: 'Equipe',         icon: 'ph-users-three' },
        ];
        const tabsHtml = tabs.map(t => `
            <button class="tab ${activeSettingsTab === t.id ? 'active' : ''}" data-tab="${t.id}">
                <i class="ph ${t.icon}"></i> ${t.label}
            </button>`).join('');

        return `
        <div class="page-enter">
            <div class="tabs">${tabsHtml}</div>
            <div id="settings-panel">${settingsPanels[activeSettingsTab]()}</div>
        </div>`;
    },
};

// ========================================================
// SETTINGS PANELS
// ========================================================
const settingsPanels = {
    profile: () => {
        const p = mockData.settings.profile;
        return `
        <div class="settings-grid">
            <div class="card">
                <div class="card-header"><h2>Informações da empresa</h2></div>
                <form class="form-grid" onsubmit="event.preventDefault(); window.GrowthHub.toast('Perfil atualizado','As informações foram salvas com sucesso.');">
                    <div class="form-field span-2">
                        <label>Nome da empresa</label>
                        <input type="text" value="${p.company}">
                    </div>
                    <div class="form-field">
                        <label>Responsável</label>
                        <input type="text" value="${p.owner}">
                    </div>
                    <div class="form-field">
                        <label>E-mail principal</label>
                        <input type="email" value="${p.email}">
                    </div>
                    <div class="form-field">
                        <label>Telefone</label>
                        <input type="tel" value="${p.phone}">
                    </div>
                    <div class="form-field">
                        <label>Fuso horário</label>
                        <select>
                            <option selected>America/Sao_Paulo (UTC-3)</option>
                            <option>America/Recife (UTC-3)</option>
                            <option>America/Manaus (UTC-4)</option>
                        </select>
                    </div>
                    <div class="form-field span-2" style="flex-direction:row;justify-content:flex-end;gap:0.5rem;">
                        <button type="button" class="btn btn-outline">Cancelar</button>
                        <button type="submit" class="btn btn-primary"><i class="ph ph-floppy-disk"></i> Salvar alterações</button>
                    </div>
                </form>
            </div>

            <div class="card">
                <div class="card-header"><h2>Identidade visual</h2></div>
                <div style="display:flex;align-items:center;gap:1rem;margin-bottom:1.25rem;">
                    <div class="avatar" style="width:64px;height:64px;font-size:1.5rem;">PS</div>
                    <div>
                        <strong>Logo da empresa</strong>
                        <p style="font-size:0.8125rem;">PNG ou SVG, até 2MB.</p>
                        <button class="btn btn-outline btn-sm" style="margin-top:0.5rem;"><i class="ph ph-upload-simple"></i> Enviar nova</button>
                    </div>
                </div>
                <div class="settings-row">
                    <div class="meta"><strong>Cor primária</strong><span>Usada em e-mails e anúncios.</span></div>
                    <input type="color" value="#4f46e5" style="width:48px;height:32px;border:1px solid var(--border);border-radius:6px;cursor:pointer;background:transparent;">
                </div>
                <div class="settings-row">
                    <div class="meta"><strong>Cor secundária</strong><span>Acentos e CTAs.</span></div>
                    <input type="color" value="#ec4899" style="width:48px;height:32px;border:1px solid var(--border);border-radius:6px;cursor:pointer;background:transparent;">
                </div>
            </div>
        </div>`;
    },

    integrations: () => `
        <div class="integrations-grid">
            <div class="card integration-card">
                <div class="integration-header">
                    <div class="stat-icon" style="background:#eef2ff;color:#3b5998;"><i class="ph-fill ph-facebook-logo"></i></div>
                    <div>
                        <h3>Meta Ads</h3>
                        <p>Conectado como DelliveryAqui</p>
                    </div>
                </div>
                <p style="font-size:0.8125rem;">Sincronize seu pixel e gerencie campanhas do Facebook e Instagram diretamente.</p>
                <div style="margin-top:auto;display:flex;justify-content:space-between;align-items:center;">
                    <small>Sincronizado há 4 min</small>
                    <button class="btn btn-outline btn-sm" style="color:var(--success);border-color:var(--success);"><i class="ph ph-check-circle"></i> Conectado</button>
                </div>
            </div>
            <div class="card integration-card">
                <div class="integration-header">
                    <div class="stat-icon" style="background:#fef2f2;color:#ea4335;"><i class="ph-fill ph-google-logo"></i></div>
                    <div>
                        <h3>Google Ads</h3>
                        <p>Conectado como DelliveryAqui</p>
                    </div>
                </div>
                <p style="font-size:0.8125rem;">Atraia clientes pesquisando por delivery na sua região. Tag configurada.</p>
                <div style="margin-top:auto;display:flex;justify-content:space-between;align-items:center;">
                    <small>Sincronizado há 12 min</small>
                    <button class="btn btn-outline btn-sm" style="color:var(--success);border-color:var(--success);"><i class="ph ph-check-circle"></i> Conectado</button>
                </div>
            </div>
            <div class="card integration-card">
                <div class="integration-header">
                    <div class="stat-icon" style="background:#f0fdf4;color:#25d366;"><i class="ph-fill ph-whatsapp-logo"></i></div>
                    <div>
                        <h3>WhatsApp Business API</h3>
                        <p>Não conectado</p>
                    </div>
                </div>
                <p style="font-size:0.8125rem;">Envie campanhas de remarketing via WhatsApp para carrinhos abandonados.</p>
                <div style="margin-top:auto;display:flex;justify-content:flex-end;">
                    <button class="btn btn-primary btn-sm">Conectar</button>
                </div>
            </div>
            <div class="card integration-card">
                <div class="integration-header">
                    <div class="stat-icon" style="background:#f3f4f6;color:#111827;"><i class="ph-fill ph-tiktok-logo"></i></div>
                    <div>
                        <h3>TikTok Ads</h3>
                        <p>Não conectado</p>
                    </div>
                </div>
                <p style="font-size:0.8125rem;">Alcance um público jovem e engajado com campanhas em vídeo.</p>
                <div style="margin-top:auto;display:flex;justify-content:flex-end;">
                    <button class="btn btn-primary btn-sm">Conectar</button>
                </div>
            </div>
            <div class="card integration-card">
                <div class="integration-header">
                    <div class="stat-icon" style="background:#fef2f2;color:#ef4444;"><i class="ph-fill ph-envelope"></i></div>
                    <div>
                        <h3>Mailchimp</h3>
                        <p>Conectado como sabordaterra</p>
                    </div>
                </div>
                <p style="font-size:0.8125rem;">Dispare campanhas de e-mail marketing automatizadas.</p>
                <div style="margin-top:auto;display:flex;justify-content:space-between;align-items:center;">
                    <small>Sincronizado há 1 h</small>
                    <button class="btn btn-outline btn-sm" style="color:var(--success);border-color:var(--success);"><i class="ph ph-check-circle"></i> Conectado</button>
                </div>
            </div>
            <div class="card integration-card">
                <div class="integration-header">
                    <div class="stat-icon" style="background:#fef3c7;color:#f59e0b;"><i class="ph ph-link"></i></div>
                    <div>
                        <h3>Zapier</h3>
                        <p>Não conectado</p>
                    </div>
                </div>
                <p style="font-size:0.8125rem;">Conecte o Growth Hub a mais de 5.000 aplicativos com automações.</p>
                <div style="margin-top:auto;display:flex;justify-content:flex-end;">
                    <button class="btn btn-primary btn-sm">Conectar</button>
                </div>
            </div>
        </div>`,

    notifications: () => {
        const rows = mockData.settings.notifications.map(n => `
            <div class="settings-row">
                <div class="meta">
                    <strong>${n.label}</strong>
                    <span>${n.desc}</span>
                </div>
                <label class="switch">
                    <input type="checkbox" ${n.on ? 'checked' : ''} data-notif="${n.id}">
                    <span class="slider"></span>
                </label>
            </div>`).join('');
        return `
        <div class="settings-grid">
            <div class="card">
                <div class="card-header">
                    <div>
                        <h2>Preferências de notificação</h2>
                        <span class="card-subtitle">Escolha como deseja ser avisado.</span>
                    </div>
                </div>
                ${rows}
            </div>
            <div class="card">
                <div class="card-header"><h2>Canais de envio</h2></div>
                <div class="settings-row">
                    <div class="meta"><strong>E-mail</strong><span>contato@sabordaterra.com.br</span></div>
                    <label class="switch"><input type="checkbox" checked><span class="slider"></span></label>
                </div>
                <div class="settings-row">
                    <div class="meta"><strong>Push no navegador</strong><span>Aviso instantâneo no painel.</span></div>
                    <label class="switch"><input type="checkbox" checked><span class="slider"></span></label>
                </div>
                <div class="settings-row">
                    <div class="meta"><strong>SMS</strong><span>Apenas para alertas críticos.</span></div>
                    <label class="switch"><input type="checkbox"><span class="slider"></span></label>
                </div>
                <div class="settings-row">
                    <div class="meta"><strong>WhatsApp</strong><span>Resumo diário às 09:00.</span></div>
                    <label class="switch"><input type="checkbox" checked><span class="slider"></span></label>
                </div>
            </div>
        </div>`;
    },

    billing: () => {
        const p = mockData.settings.plan;
        const features = p.features.map(f => `<li><i class="ph-fill ph-check-circle"></i> ${f}</li>`).join('');
        return `
        <div class="settings-grid">
            <div class="card plan-card">
                <span class="plan-tag">Plano atual</span>
                <h2 style="margin-top:0.75rem;">${p.name}</h2>
                <div class="price">${p.price}<small>${p.period}</small></div>
                <p>${p.renew}</p>
                <ul class="plan-features">${features}</ul>
                <div style="display:flex;gap:0.5rem;margin-top:0.5rem;">
                    <button class="btn btn-primary btn-sm"><i class="ph ph-arrow-up"></i> Fazer upgrade</button>
                    <button class="btn btn-outline btn-sm">Cancelar plano</button>
                </div>
            </div>
            <div class="card">
                <div class="card-header"><h2>Forma de pagamento</h2></div>
                <div class="settings-row">
                    <div class="meta">
                        <strong><i class="ph ph-credit-card"></i> Mastercard •••• 4271</strong>
                        <span>Expira em 08/2028</span>
                    </div>
                    <button class="btn btn-outline btn-sm">Trocar</button>
                </div>
                <div class="settings-row">
                    <div class="meta"><strong>CNPJ</strong><span>12.345.678/0001-90</span></div>
                    <button class="btn btn-ghost btn-sm">Editar</button>
                </div>
                <div class="settings-row">
                    <div class="meta"><strong>Endereço de cobrança</strong><span>Av. Paulista, 1000 — São Paulo, SP</span></div>
                    <button class="btn btn-ghost btn-sm">Editar</button>
                </div>

                <div class="card-header" style="margin-top:1.25rem;"><h2>Últimas faturas</h2></div>
                <ul class="list-clean">
                    <li>
                        <div class="label-block"><strong>Maio / 2026</strong><span>Pago em 14/05/2026</span></div>
                        <div class="value-block">
                            <div class="num">R$ 199,00</div>
                            <a href="#" style="font-size:0.75rem;color:var(--primary);">Baixar PDF</a>
                        </div>
                    </li>
                    <li>
                        <div class="label-block"><strong>Abril / 2026</strong><span>Pago em 14/04/2026</span></div>
                        <div class="value-block">
                            <div class="num">R$ 199,00</div>
                            <a href="#" style="font-size:0.75rem;color:var(--primary);">Baixar PDF</a>
                        </div>
                    </li>
                    <li>
                        <div class="label-block"><strong>Março / 2026</strong><span>Pago em 14/03/2026</span></div>
                        <div class="value-block">
                            <div class="num">R$ 199,00</div>
                            <a href="#" style="font-size:0.75rem;color:var(--primary);">Baixar PDF</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>`;
    },

    team: () => {
        const rows = mockData.settings.team.map(t => `
            <div class="team-row">
                <div class="avatar">${t.initials}</div>
                <div class="info">
                    <strong>${t.name}</strong>
                    <span>${t.email}</span>
                </div>
                <span class="status-badge ${t.role === 'Proprietário' ? 'status-active' : 'status-draft'}">${t.role}</span>
                <button class="icon-btn btn-icon" title="Mais"><i class="ph ph-dots-three-vertical"></i></button>
            </div>`).join('');
        return `
        <div class="card">
            <div class="card-header">
                <div>
                    <h2>Membros da equipe</h2>
                    <span class="card-subtitle">${mockData.settings.team.length} pessoas com acesso ao Growth Hub.</span>
                </div>
                <button class="btn btn-primary btn-sm"><i class="ph ph-user-plus"></i> Convidar membro</button>
            </div>
            ${rows}
        </div>`;
    },
};

// ========================================================
// PAGE TITLES
// ========================================================
const pageTitles = {
    dashboard:  { title: 'Visão Geral',           subtitle: 'Acompanhe o desempenho do seu marketing em tempo real.' },
    analytics:  { title: 'Analytics',             subtitle: 'Mergulhe nos dados de funil, canais e conversão.' },
    campaigns:  { title: 'Campanhas',             subtitle: 'Gerencie todas as campanhas de aquisição e retenção.' },
    audience:   { title: 'Público',               subtitle: 'Conheça e segmente sua base de clientes.' },
    settings:   { title: 'Configurações',         subtitle: 'Conta, integrações, notificações e cobrança.' }
};

// ========================================================
// CHARTS
// ========================================================
let chartInstances = {};
function destroyChart(name) {
    if (chartInstances[name]) {
        chartInstances[name].destroy();
        chartInstances[name] = null;
    }
}

function initDashboardCharts() {
    Chart.defaults.font.family = "'Inter', sans-serif";
    Chart.defaults.color = '#64748b';

    const ctxMain = document.getElementById('mainChart');
    if (ctxMain) {
        destroyChart('main');
        chartInstances.main = new Chart(ctxMain, {
            type: 'line',
            data: {
                labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
                datasets: [
                    {
                        label: 'Faturamento (R$)',
                        data: [6500, 7200, 8900, 7800, 11200, 14500, 13000],
                        borderColor: '#4f46e5',
                        backgroundColor: 'rgba(79, 70, 229, 0.1)',
                        borderWidth: 3,
                        tension: 0.4,
                        fill: true,
                        pointBackgroundColor: '#fff',
                        pointBorderColor: '#4f46e5',
                        pointBorderWidth: 2,
                        pointRadius: 4,
                        yAxisID: 'y'
                    },
                    {
                        label: 'Conversões',
                        data: [65, 59, 80, 81, 112, 145, 130],
                        borderColor: '#ec4899',
                        backgroundColor: 'transparent',
                        borderWidth: 2,
                        tension: 0.4,
                        borderDash: [4,4],
                        pointRadius: 3,
                        yAxisID: 'y1'
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                interaction: { mode: 'index', intersect: false },
                plugins: { legend: { position: 'bottom', labels: { boxWidth: 12, usePointStyle: true } } },
                scales: {
                    y:  { beginAtZero: true, position: 'left',  grid: { color: '#e2e8f0' } },
                    y1: { beginAtZero: true, position: 'right', grid: { drawOnChartArea: false } },
                    x:  { grid: { display: false } }
                }
            }
        });
    }

    const ctxDoughnut = document.getElementById('doughnutChart');
    if (ctxDoughnut) {
        destroyChart('doughnut');
        chartInstances.doughnut = new Chart(ctxDoughnut, {
            type: 'doughnut',
            data: {
                labels: ['Meta Ads', 'Google Ads', 'Direto', 'WhatsApp', 'Outros'],
                datasets: [{
                    data: [45, 27, 14, 8, 6],
                    backgroundColor: ['#4f46e5', '#ec4899', '#10b981', '#25d366', '#e2e8f0'],
                    borderWidth: 0,
                    hoverOffset: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '70%',
                plugins: { legend: { position: 'right', labels: { boxWidth: 10, usePointStyle: true, padding: 12 } } }
            }
        });
    }
}

function initAnalyticsCharts() {
    const ctxRev = document.getElementById('revenueChart');
    if (ctxRev) {
        destroyChart('revenue');
        chartInstances.revenue = new Chart(ctxRev, {
            type: 'bar',
            data: {
                labels: ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4'],
                datasets: [
                    { label: 'Receita', data: [18400, 22100, 26800, 31200], backgroundColor: '#4f46e5', borderRadius: 6, barThickness: 22 },
                    { label: 'Investimento', data: [2100, 2400, 2600, 2740], backgroundColor: '#fbbf24', borderRadius: 6, barThickness: 22 }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { position: 'bottom', labels: { boxWidth: 10, usePointStyle: true } } },
                scales: { x: { grid: { display: false } }, y: { grid: { color: '#e2e8f0' } } }
            }
        });
    }

    const ctxChannel = document.getElementById('channelChart');
    if (ctxChannel) {
        destroyChart('channel');
        const ch = mockData.analytics.channels;
        chartInstances.channel = new Chart(ctxChannel, {
            type: 'bar',
            data: {
                labels: ch.map(c => c.name),
                datasets: [{
                    label: 'Receita (%)',
                    data: ch.map(c => c.value),
                    backgroundColor: ['#4f46e5','#ec4899','#10b981','#25d366','#000000','#0ea5e9'],
                    borderRadius: 6
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: { x: { grid: { color: '#e2e8f0' } }, y: { grid: { display: false } } }
            }
        });
    }

    const ctxHourly = document.getElementById('hourlyChart');
    if (ctxHourly) {
        destroyChart('hourly');
        chartInstances.hourly = new Chart(ctxHourly, {
            type: 'line',
            data: {
                labels: ['00','03','06','09','12','15','18','21'],
                datasets: [{
                    label: 'Pedidos',
                    data: [18, 6, 4, 32, 145, 88, 198, 162],
                    borderColor: '#10b981',
                    backgroundColor: 'rgba(16, 185, 129, 0.15)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: '#fff',
                    pointBorderColor: '#10b981',
                    pointBorderWidth: 2,
                    pointRadius: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: { x: { grid: { display: false } }, y: { beginAtZero: true, grid: { color: '#e2e8f0' } } }
            }
        });
    }
}

function initAudienceCharts() {
    const ctxRet = document.getElementById('retentionChart');
    if (ctxRet) {
        destroyChart('retention');
        chartInstances.retention = new Chart(ctxRet, {
            type: 'bar',
            data: {
                labels: ['Jan','Fev','Mar','Abr','Mai','Jun'],
                datasets: [
                    { label: 'Novos',       data: [120, 150, 180, 140, 200, 220], backgroundColor: '#8b5cf6', borderRadius: 4 },
                    { label: 'Retornantes', data: [300, 320, 310, 350, 380, 410], backgroundColor: '#4f46e5', borderRadius: 4 }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { position: 'bottom', labels: { boxWidth: 10, usePointStyle: true } } },
                scales: {
                    x: { stacked: true, grid: { display: false } },
                    y: { stacked: true, grid: { color: '#e2e8f0' } }
                }
            }
        });
    }

    const ctxAge = document.getElementById('ageChart');
    if (ctxAge) {
        destroyChart('age');
        const a = mockData.audience.ageGroups;
        chartInstances.age = new Chart(ctxAge, {
            type: 'doughnut',
            data: {
                labels: a.map(x => x.label),
                datasets: [{
                    data: a.map(x => x.value),
                    backgroundColor: ['#a78bfa','#4f46e5','#ec4899','#fbbf24','#10b981'],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '60%',
                plugins: { legend: { position: 'right', labels: { boxWidth: 10, usePointStyle: true, padding: 12 } } }
            }
        });
    }
}

// ========================================================
// MODAL: NEW CAMPAIGN
// ========================================================
const modal = {
    el: null,
    init() {
        this.el = document.getElementById('new-campaign-modal');
        if (!this.el) return;

        this.el.addEventListener('click', (e) => {
            if (e.target === this.el || e.target.closest('[data-close-modal]')) {
                this.close();
            }
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.el.classList.contains('is-open')) this.close();
        });

        const form = document.getElementById('new-campaign-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.submit(form);
        });
    },
    open() {
        if (!this.el) return;
        this.el.classList.add('is-open');
        this.el.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        const today = new Date().toISOString().split('T')[0];
        const start = document.getElementById('cmp-start');
        if (start && !start.value) start.value = today;
        setTimeout(() => document.getElementById('cmp-name')?.focus(), 100);
    },
    close() {
        if (!this.el) return;
        this.el.classList.remove('is-open');
        this.el.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        document.getElementById('new-campaign-form')?.reset();
        this.el.querySelectorAll('.form-field.has-error').forEach(f => f.classList.remove('has-error'));
    },
    submit(form) {
        const data = new FormData(form);
        const required = ['name','platform','objective','budget','audience','start'];
        let valid = true;
        required.forEach(field => {
            const input = form.querySelector(`[name="${field}"]`);
            const wrapper = input?.closest('.form-field');
            if (!data.get(field)) {
                wrapper?.classList.add('has-error');
                valid = false;
            } else {
                wrapper?.classList.remove('has-error');
            }
        });
        if (!valid) {
            toast.show('Verifique os campos', 'Preencha todos os campos obrigatórios.', 'warning');
            return;
        }

        const platformMap = {
            'Meta Ads':    { icon: 'ph-instagram-logo', color: '#e4405f' },
            'Google Ads':  { icon: 'ph-google-logo',    color: '#ea4335' },
            'TikTok Ads':  { icon: 'ph-tiktok-logo',    color: '#000000' },
            'WhatsApp':    { icon: 'ph-whatsapp-logo',  color: '#25d366' },
            'E-mail':      { icon: 'ph-envelope',       color: '#0ea5e9' }
        };
        const platform = data.get('platform');
        const meta = platformMap[platform] || { icon: 'ph-megaphone', color: '#4f46e5' };

        const newCampaign = {
            id: mockData.campaigns.length + 1,
            name: data.get('name'),
            platform,
            icon: meta.icon,
            color: meta.color,
            status: data.get('status') || 'Ativa',
            spend: 0,
            budget: Number(data.get('budget')),
            roas: '-',
            conversions: 0,
            ctr: '-'
        };
        mockData.campaigns.unshift(newCampaign);
        this.close();
        toast.show('Campanha criada!', `"${newCampaign.name}" foi adicionada com sucesso.`, 'success');
        loadPage('campaigns');
    }
};

// ========================================================
// TOAST
// ========================================================
const toast = {
    show(title, message, type = 'success') {
        const container = document.getElementById('toast-container');
        if (!container) return;
        const iconMap = { success: 'ph-check-circle', warning: 'ph-warning', danger: 'ph-x-circle', info: 'ph-info' };
        const colorMap = { success: 'var(--success)', warning: 'var(--warning)', danger: 'var(--danger)', info: 'var(--info)' };
        const el = document.createElement('div');
        el.className = 'toast';
        el.style.borderLeftColor = colorMap[type];
        el.innerHTML = `
            <i class="ph ${iconMap[type]}" style="color:${colorMap[type]};"></i>
            <div class="toast-body">
                <strong>${title}</strong>
                <span>${message}</span>
            </div>`;
        container.appendChild(el);
        setTimeout(() => {
            el.classList.add('removing');
            setTimeout(() => el.remove(), 250);
        }, 3500);
    }
};

// ========================================================
// PAGE LOADER & ROUTING
// ========================================================
function loadPage(pageKey) {
    const contentContainer = document.getElementById('app-content');
    const pageTitle = document.getElementById('page-title');
    const pageSubtitle = document.getElementById('page-subtitle');
    const navItems = document.querySelectorAll('.nav-item');

    contentContainer.innerHTML = pages[pageKey] ? pages[pageKey]() : '<h2>Página não encontrada</h2>';
    if (pageTitles[pageKey]) {
        pageTitle.textContent = pageTitles[pageKey].title;
        pageSubtitle.textContent = pageTitles[pageKey].subtitle;
    }
    navItems.forEach(item => item.classList.toggle('active', item.dataset.page === pageKey));

    if (pageKey === 'dashboard') initDashboardCharts();
    if (pageKey === 'analytics') initAnalyticsCharts();
    if (pageKey === 'audience')  initAudienceCharts();

    bindPageEvents(pageKey);
}

function bindPageEvents(pageKey) {
    document.querySelectorAll('[data-go]').forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            loadPage(el.dataset.go);
        });
    });

    if (pageKey === 'campaigns') {
        document.querySelectorAll('.chip[data-filter]').forEach(chip => {
            chip.addEventListener('click', () => {
                activeCampaignFilter = chip.dataset.filter;
                loadPage('campaigns');
            });
        });
        document.getElementById('open-new-campaign-inline')?.addEventListener('click', () => modal.open());
    }

    if (pageKey === 'settings') {
        document.querySelectorAll('.tab[data-tab]').forEach(tab => {
            tab.addEventListener('click', () => {
                activeSettingsTab = tab.dataset.tab;
                document.querySelectorAll('.tab[data-tab]').forEach(t => t.classList.toggle('active', t === tab));
                document.getElementById('settings-panel').innerHTML = settingsPanels[activeSettingsTab]();
            });
        });
    }
}

// ========================================================
// INITIALIZATION
// ========================================================
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            loadPage(e.currentTarget.dataset.page);
        });
    });

    document.getElementById('open-new-campaign')?.addEventListener('click', () => modal.open());
    modal.init();

    loadPage('dashboard');
});

// Expose minimal API for inline handlers (e.g. forms inside settings panels).
window.GrowthHub = { toast: (t, m, type = 'success') => toast.show(t, m, type) };
