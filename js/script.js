
/**
 * Currículo Interativo - Script Principal
 * Autor: Sistema
 * Funcionalidades: Tema escuro/claro, seções expansíveis, animações
 */

// Estado da aplicação
const AppState = {
    theme: 'light',
    sectionsExpanded: {
        perfil: true,
        experiencia: true,
        formacao: true,
        qualificacoes: true,
        idiomas: true
    },
    isLoaded: false
};

// Gerenciador de Temas
const ThemeManager = {
    init() {
        // Recuperar tema salvo ou usar preferência do sistema
        const savedTheme = localStorage.getItem('curriculum-theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedTheme) {
            AppState.theme = savedTheme;
        } else if (systemPrefersDark) {
            AppState.theme = 'dark';
        }
        
        this.apply();
        this.setupToggleButton();
        this.watchSystemChanges();
    },

    apply() {
        document.documentElement.setAttribute('data-theme', AppState.theme);
        this.updateToggleIcon();
    },

    toggle() {
        AppState.theme = AppState.theme === 'light' ? 'dark' : 'light';
        this.apply();
        this.save();
        this.animateToggle();
    },

    save() {
        localStorage.setItem('curriculum-theme', AppState.theme);
    },

    updateToggleIcon() {
        const toggleBtn = document.getElementById('theme-toggle');
        if (!toggleBtn) return;

        const moonIcon = toggleBtn.querySelector('.fa-moon');
        const sunIcon = toggleBtn.querySelector('.fa-sun');
        
        if (AppState.theme === 'dark') {
            moonIcon?.classList.add('hidden');
            sunIcon?.classList.remove('hidden');
        } else {
            moonIcon?.classList.remove('hidden');
            sunIcon?.classList.add('hidden');
        }
    },

    setupToggleButton() {
        const toggleBtn = document.getElementById('theme-toggle');
        if (!toggleBtn) return;

        toggleBtn.addEventListener('click', () => {
            this.toggle();
        });

        // Adicionar suporte a teclado
        toggleBtn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.toggle();
            }
        });
    },

    animateToggle() {
        const toggleBtn = document.getElementById('theme-toggle');
        if (!toggleBtn) return;

        toggleBtn.style.transform = 'scale(0.95) rotate(180deg)';
        setTimeout(() => {
            toggleBtn.style.transform = 'scale(1) rotate(0deg)';
        }, 150);
    },

    watchSystemChanges() {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        mediaQuery.addEventListener('change', (e) => {
            // Só alterar se não houver preferência salva
            if (!localStorage.getItem('curriculum-theme')) {
                AppState.theme = e.matches ? 'dark' : 'light';
                this.apply();
            }
        });
    }
};

// Gerenciador de Seções
const SectionManager = {
    init() {
        this.loadExpandedStates();
        this.setupEventListeners();
        this.applyInitialStates();
    },

    setupEventListeners() {
        // Selecionar todos os headers de seção
        const sectionHeaders = document.querySelectorAll('.section-header');
        
        sectionHeaders.forEach(header => {
            const sectionId = header.closest('.section')?.id;
            if (!sectionId) return;

            header.addEventListener('click', () => {
                this.toggleSection(sectionId);
            });

            // Suporte a teclado
            header.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.toggleSection(sectionId);
                }
            });

            // Tornar focável
            header.setAttribute('tabindex', '0');
            header.setAttribute('role', 'button');
            header.setAttribute('aria-expanded', AppState.sectionsExpanded[sectionId] ? 'true' : 'false');
        });
    },

    toggleSection(sectionId) {
        if (!sectionId || !AppState.sectionsExpanded.hasOwnProperty(sectionId)) return;

        const section = document.getElementById(sectionId);
        const header = section?.querySelector('.section-header');
        
        if (!section || !header) return;

        // Alternar estado
        AppState.sectionsExpanded[sectionId] = !AppState.sectionsExpanded[sectionId];
        
        // Aplicar classes CSS
        if (AppState.sectionsExpanded[sectionId]) {
            section.classList.remove('collapsed');
        } else {
            section.classList.add('collapsed');
        }

        // Atualizar ARIA
        header.setAttribute('aria-expanded', AppState.sectionsExpanded[sectionId] ? 'true' : 'false');

        // Salvar estado
        this.saveExpandedStates();

        // Animar ícone
        this.animateToggleIcon(header);
    },

    applyInitialStates() {
        Object.keys(AppState.sectionsExpanded).forEach(sectionId => {
            const section = document.getElementById(sectionId);
            if (!section) return;

            if (!AppState.sectionsExpanded[sectionId]) {
                section.classList.add('collapsed');
            }
        });
    },

    animateToggleIcon(header) {
        const icon = header.querySelector('.toggle-icon');
        if (!icon) return;

        icon.style.transform = 'scale(0.8) rotate(180deg)';
        setTimeout(() => {
            icon.style.transform = '';
        }, 150);
    },

    saveExpandedStates() {
        localStorage.setItem('curriculum-sections', JSON.stringify(AppState.sectionsExpanded));
    },

    loadExpandedStates() {
        const saved = localStorage.getItem('curriculum-sections');
        if (saved) {
            try {
                const parsedStates = JSON.parse(saved);
                Object.assign(AppState.sectionsExpanded, parsedStates);
            } catch (e) {
                console.warn('Erro ao carregar estados das seções:', e);
            }
        }
    }
};

// Gerenciador de Animações
const AnimationManager = {
    init() {
        this.setupScrollAnimations();
        this.setupHoverEffects();
        this.setupProgressBars();
    },

    setupScrollAnimations() {
        // Intersection Observer para animações de entrada
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // Observar elementos animáveis
        const animatableElements = document.querySelectorAll(
            '.experience-item, .education-item, .language-item, .skill-category'
        );

        animatableElements.forEach(el => {
            observer.observe(el);
        });
    },

    setupHoverEffects() {
        // Adicionar classes CSS para hover effects onde necessário
        const hoverElements = document.querySelectorAll(
            '.experience-item, .education-item, .skill-tag, .language-item'
        );

        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                el.style.transform = el.style.transform || 'translateY(-2px)';
            });

            el.addEventListener('mouseleave', () => {
                el.style.transform = '';
            });
        });
    },

    setupProgressBars() {
        // Animar barras de progresso dos idiomas quando visíveis
        const progressBars = document.querySelectorAll('.level-progress');
        
        const progressObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progressBar = entry.target;
                    const width = progressBar.style.width;
                    
                    // Resetar e animar
                    progressBar.style.width = '0%';
                    setTimeout(() => {
                        progressBar.style.width = width;
                    }, 200);
                }
            });
        }, { threshold: 0.5 });

        progressBars.forEach(bar => {
            progressObserver.observe(bar);
        });
    }
};

// Utilitários
const Utils = {
    // Debounce para otimizar eventos
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Verificar se é dispositivo móvel
    isMobile() {
        return window.innerWidth <= 768;
    },

    // Smooth scroll para links internos
    setupSmoothScroll() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').slice(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
};

// Gerenciador de Performance
const PerformanceManager = {
    init() {
        this.optimizeImages();
        this.setupLazyLoading();
        this.monitorPerformance();
    },

    optimizeImages() {
        // Placeholder para otimização de imagens futuras
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            img.addEventListener('load', () => {
                img.classList.add('loaded');
            });
        });
    },

    setupLazyLoading() {
        // Implementar lazy loading para conteúdo pesado se necessário
        if ('IntersectionObserver' in window) {
            // Lazy loading já implementado via Intersection Observer
        }
    },

    monitorPerformance() {
        // Monitor básico de performance
        if ('performance' in window) {
            window.addEventListener('load', () => {
                const perfData = performance.timing;
                const loadTime = perfData.loadEventEnd - perfData.navigationStart;
                console.log(`Tempo de carregamento: ${loadTime}ms`);
            });
        }
    }
};

// Função global para toggle de seções (mantida para compatibilidade com HTML)
function toggleSection(sectionId) {
    SectionManager.toggleSection(sectionId);
}

// Gerenciador de Eventos de Teclado Global
const KeyboardManager = {
    init() {
        document.addEventListener('keydown', (e) => {
            // Atalho para alternar tema (Ctrl/Cmd + Shift + T)
            if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'T') {
                e.preventDefault();
                ThemeManager.toggle();
            }

            // Esc para fechar seções abertas
            if (e.key === 'Escape') {
                this.collapseAllSections();
            }
        });
    },

    collapseAllSections() {
        Object.keys(AppState.sectionsExpanded).forEach(sectionId => {
            if (AppState.sectionsExpanded[sectionId]) {
                SectionManager.toggleSection(sectionId);
            }
        });
    }
};

// Inicialização Principal
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Inicializando Currículo Interativo...');
    
    try {
        // Inicializar todos os módulos
        ThemeManager.init();
        SectionManager.init();
        AnimationManager.init();
        PerformanceManager.init();
        KeyboardManager.init();
        Utils.setupSmoothScroll();
        
        // Marcar como carregado
        AppState.isLoaded = true;
        document.body.classList.add('loaded');
        
        console.log('✅ Currículo carregado com sucesso!');
        
        // Log de informações úteis
        console.log('💡 Atalhos de teclado:');
        console.log('   - Ctrl/Cmd + Shift + T: Alternar tema');
        console.log('   - Esc: Fechar todas as seções');
        console.log('   - Tab: Navegar pelos elementos');
        
    } catch (error) {
        console.error('❌ Erro durante a inicialização:', error);
    }
});

// Manipulador de redimensionamento da janela
window.addEventListener('resize', Utils.debounce(() => {
    // Reajustar layouts se necessário
    if (Utils.isMobile()) {
        document.body.classList.add('mobile-layout');
    } else {
        document.body.classList.remove('mobile-layout');
    }
}, 250));

// Manipulador de visibilidade da página
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
        // Página ficou visível - pode reativar animações se necessário
        console.log('📱 Página ficou visível');
    } else {
        // Página foi ocultada - pode pausar animações para economizar bateria
        console.log('💤 Página foi ocultada');
    }
});

// Exportar para uso global se necessário
window.CurriculumApp = {
    state: AppState,
    theme: ThemeManager,
    sections: SectionManager,
    animations: AnimationManager,
    utils: Utils
};

// Logs de debug (apenas em desenvolvimento)
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    console.log('🔧 Modo de desenvolvimento ativo');
    window.DEBUG = true;
}
