document.addEventListener("DOMContentLoaded", function () {
    // Buscador funcional
    const searchInput = document.getElementById("search-input");
    const figures = document.querySelectorAll(".figures-explorar");

    if (searchInput) {
        searchInput.addEventListener("input", function () {
            const searchTerm = searchInput.value.toLowerCase();

            figures.forEach(function (figure) {
                const artistName = figure.querySelector(".artista").textContent.toLowerCase();

                if (artistName.includes(searchTerm)) {
                    figure.style.display = "block"; // Muestra la figura si coincide
                } else {
                    figure.style.display = "none"; // Oculta la figura si no coincide
                }
            });
        });
    }

    // Mensaje al contestar los formularios de Registro e Inicio de sesión
    const signinForm = document.getElementById("signinForm");
    const loginForm = document.getElementById("loginForm");
    const successMessage = document.querySelector(".successMessage");

    if (signinForm) {
        signinForm.addEventListener("submit", function (event) {
            event.preventDefault();
            successMessage.textContent = "¡Registro exitoso! Bienvenido/a a la comunidad de LiveLens 🎉";
            successMessage.style.display = "block";
            signinForm.style.display = "none";
        });
    }

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            successMessage.textContent = "¡Inicio de sesión exitoso! Bienvenido/a de vuelta 🎉";
            successMessage.style.display = "block";
            loginForm.style.display = "none";
        });
    }

    // Integración de SweetAlert al contestar los formularios de Registro e Inicio de sesión
    if (signinForm) {
        signinForm.addEventListener("submit", function (e) {
            e.preventDefault();
            Swal.fire({
                title: "¡Bienvenido/a!",
                text: "Comienza a explorar lo mejor de LiveLens",
                icon: "success",
                background: "#f0f0ff",
                confirmButtonText: "¡Genial!",
                customClass: {
                    popup: "swal2-borderless animated bounceIn", // Animación con Animate.css
                    title: "custom-font",
                    htmlContainer: "custom-font",
                    confirmButton: "custom-font",
                },
            });
        });
    }

    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            Swal.fire({
                title: "¡Hola de nuevo!",
                text: "Nos alegra verte nuevamente en LiveLens",
                icon: "success",
                background: "#f0f0ff",
                confirmButtonText: "¡Perfecto!",
                customClass: {
                    popup: "animated bounceIn", // Animación con Animate.css
                    title: "custom-font",
                    htmlContainer: "custom-font",
                    confirmButton: "custom-font",
                },
            });
        });
    }
});
