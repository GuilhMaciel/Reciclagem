(function () {
            const toggle = document.querySelector('.dropdown-toggle');
            const dropdown = document.querySelector('.dropdown');
            const menu = document.querySelector('.dropdown-menu');

            if (!toggle || !dropdown || !menu) return;

            function closeMenu() {
                dropdown.classList.remove('open');
                toggle.setAttribute('aria-expanded', 'false');
            }

            toggle.addEventListener('click', function (e) {
                e.preventDefault();
                const isOpen = dropdown.classList.toggle('open');
                toggle.setAttribute('aria-expanded', String(!!isOpen));
            });

            document.addEventListener('click', function (e) {
                if (!dropdown.contains(e.target)) closeMenu();
            });

            document.addEventListener('keydown', function (e) {
                if (e.key === 'Escape') closeMenu();
            });
        })();