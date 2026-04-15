# 📊 E-Commerce Analytics Dashboard

> Dashboard de alta performance focado em Business Intelligence, utilizando as práticas mais modernas de Frontend Engineering. O projeto demonstra domínio em animações de interface, otimização de renderização e arquitetura escalável.

🔗 Acesse o projeto rodando ao vivo aqui (Link do Vercel)

✨ O que há de novo (Versão Pro)
Micro-interações com Framer Motion: Transições suaves e efeitos de staggered reveal que elevam a percepção de qualidade do produto.

Nested Layouts (Next.js 14+): Navegação instantânea sem re-renderização do Header e Sidebar, preservando o estado da aplicação.

Hooks Customizados de Performance: - useDebounce: Otimização de busca em tempo real na lista de clientes.

useMediaQuery: Inteligência responsiva para adaptar gráficos e legendas via JavaScript.

Novas Camadas de Dados: Relatórios detalhados de tráfego (Doughnut Charts) e gestão de base de clientes com filtros assíncronos.

🛠️ Tecnologias e Ferramentas
Core: Next.js 14+ (App Router), TypeScript, React.

Animações: Framer Motion.

UI & UX: Tailwind CSS, shadcn/ui (Radix UI), Lucide Icons.

Data Viz: Apache ECharts (Charts complexos e responsivos).

Gerenciamento de Estado: Zustand (Filtros Globais).

Otimização: TanStack Table, React Suspense & Skeletons.

🏗️ Arquitetura Sênior (Deep Dive)
O projeto aplica padrões de Engenharia de Software para garantir que a interface seja agnóstica à fonte de dados:

Inversão de Dependência: A camada de componentes consome uma "Interface de Serviço". Substituir os dados mockados por uma API real (Axios/Fetch) exige alteração em apenas um arquivo de serviço.

Performance de Busca: Implementação de busca com Debouncing para evitar re-renders excessivos e sobrecarga de chamadas assíncronas.

Client-Side Reactivity vs Server-Side Hydration: Uso estratégico de Server Components para o esqueleto inicial e Client Components apenas onde a interatividade é necessária.

UX de Carregamento: Orquestração de Suspense e Loading States personalizados para evitar o efeito de "página pulando" durante o carregamento de dados.

🚀 Como rodar o projeto localmente

1. Clone o repositório:

git clone [https://github.com/SEU-USUARIO/ecommerce-analytics-portfolio.git](https://github.com/SEU-USUARIO/ecommerce-analytics-portfolio.git)

2. Instale as dependências:

npm install

3. Inicie o servidor de desenvolvimento:

npm run dev

4. Acesse http://localhost:3000 no seu navegador.

Desenvolvido com ☕ e dedicação por Gabriel Yamakishi.
