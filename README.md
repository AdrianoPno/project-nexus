# Nexus CMS Engine 🚀

Uma arquitetura **Headless Frontend** de alta performance, desenvolvida com **Next.js 14**, **TypeScript** e **Tailwind CSS**. O projeto simula o ecossistema de grandes squads de telecom (como Vivo/AEM), onde a interface é dinamicamente orquestrada por dados.

## 🏗️ Arquitetura e Decisões Técnicas

Diferente de aplicações React convencionais, este projeto utiliza o **Registry Pattern** para mapeamento dinâmico de componentes.

### 1. CMS-Driven UI (Headless)

A aplicação não possui páginas estáticas. Todo o conteúdo é consumido via um contrato de dados (JSON), permitindo que novas seções sejam adicionadas ou reordenadas sem a necessidade de novos deploys no Frontend.

### 2. Registry Pattern (Component Manager)

Implementei um `CMSManager` que atua como um orquestrador central. Ele consome um `resourceType` vindo da API e renderiza o componente correspondente, garantindo desacoplamento total entre o conteúdo e a implementação visual.

### 3. Design System & Performance

- **Atomic Components:** Construídos com Tailwind CSS para garantir um bundle final leve e consistência visual.
- **Client vs Server Components:** Uso estratégico de `'use client'` apenas em componentes interativos (como o FAQ Accordion) para otimizar o SEO e a hidratação do React.
- **Conditional Styling:** Lógica de interface baseada em eventos do DOM (Scroll) para adaptação dinâmica de contraste no Header.

## 🛠️ Tech Stack

- **Framework:** [Next.js 14 (App Router)](https://nextjs.org/)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
- **Ícones/Assets:** Lucide React / SVG Personalizados

## 📋 Funcionalidades Implementadas

- [x] **Core Engine:** Motor de renderização dinâmica baseado em JSON.
- [x] **Hero Banner:** Componente de alto impacto com suporte a variantes.
- [x] **Offer Grid:** Vitrine de produtos com lógica de destaque (Highlighter).
- [x] **FAQ Accordion:** Sistema de sanfona com gerenciamento de estado interno.
- [x] **Global Header:** Navegação fixa com efeito Glassmorphism e contraste adaptativo.

## 🚀 Como Executar

1.  **Clonar o repositório:**

```bash
git clone https://github.com/AdrianoPno/project-nexus.git
```

2.  **Navegar para o diretório do projeto:**

    ```bash
    cd project-nexus
    ```

3.  **Instalar as dependências:**

    ```bash
    npm install
    ```

4.  **Rodar o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

Desenvolvido por Adriano Silva – Focado em Engenharia de Software e Arquiteturas Escaláveis.
