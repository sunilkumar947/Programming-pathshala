let users = [];
        function showLoginForm() {
            document.getElementById("login-form").style.display = "block";
            document.getElementById("register-form").style.display = "none";
        }

        function showRegisterForm() {
            document.getElementById("register-form").style.display = "block";
            document.getElementById("login-form").style.display = "none";
        }

        function login() {
            // Here you can add the logic to handle login functionality
            let username = document.getElementById("login-username").value;
            let password = document.getElementById("login-password").value;

            // Check if the user exists and password matches
            let user = users.find(u => u.username === username && u.password === password);
            if (user) {
                alert("Login successful!");
                document.getElementById("user-details").style.display = "block";
                document.getElementById("user-info").innerText = `Username: ${user.username}\nEmail: ${user.email}`;
            } else {
                alert("Invalid username or password.");
            }
        }

        function register() {
            // Here you can add the logic to handle registration functionality
            let username = document.getElementById("register-username").value;
            let password = document.getElementById("register-password").value;
            let email = document.getElementById("register-email").value;

            // Check if username already exists
            if (users.some(u => u.username === username)) {
                alert("Username already exists. Please choose another one.");
                return;
            }

            // Register the user
            users.push({ username, password, email });
            alert("Registration successful! You can now login.");
        }