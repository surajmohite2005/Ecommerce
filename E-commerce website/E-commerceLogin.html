<?php
session_start();
$host = "localhost"; // Database host
$dbUsername = "root"; // Database username
$dbPassword = ""; // Database password
$dbname = "login_system"; // Database name

// Create connection
$conn = new mysqli($host, $dbUsername, $dbPassword, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$error_message = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $conn->real_escape_string($_POST['username']);
    $password = $conn->real_escape_string($_POST['password']);

    // SQL query to fetch user details
    $sql = "SELECT * FROM users WHERE username='$username'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        // Verify password
        if (password_verify($password, $row['password'])) {
            $_SESSION['username'] = $username;
            header("Location: success.php"); // Redirect to a success page
            exit();
        } else {
            $error_message = "Invalid Password.";
        }
    } else {
        $error_message = "No user found.";
    }
}

$conn->close();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Form with Light Button</title>
    <style>
        /* Add your CSS styling here, same as provided earlier */
    </style>
</head>

<body>
    <div class="login-box">
        <h2>Login Form</h2>
        <!-- Display error message if any -->
        <?php if ($error_message): ?>
            <p style="color: red; text-align: center;"><?php echo $error_message; ?></p>
        <?php endif; ?>
        
        <form action="login.php" method="POST">
            <div class="user-box">
                <input type="text" name="username" required>
                <label for="">Username</label>
            </div>
            <div class="user-box">
                <input type="password" name="password" required>
                <label for="">Password</label>
            </div>
            <button type="submit">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Submit
            </button>
        </form>
    </div>
</body>

</html>
