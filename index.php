<?php
	session_start();
	@$login=$_POST["login"];
	@$pass=$_POST["pass"];
	@$valider=$_POST["valider"];
	$message="";
	if(isset($valider))
	{
		include("code/php/connect.php");
		$res=$pdo->prepare("select * from users where login=? and pass=? limit 1");
		$res->setFetchMode(PDO::FETCH_ASSOC);
		$res->execute(array($login,$pass));
		$tab=$res->fetchAll();
		if(count($tab)==0)
			$message="Le password ou le username que vous avez entré est incorrect !!!";
		else
		{
			$_SESSION["autoriser"]="oui";
			header("location:code/index1.php");
		}
	}
?>
<html>
	<head>
		<link rel="stylesheet" type="text/css" href="code/css/style.css" />
	</head>
	<body>
		<form name="fo" method="post" action="">
			<div class="login-div">
                <div class="logo"></div>
                <div class="fields">
					<div class="username"><input type="username" name="login" placeholder="Username" value="<?php echo $login?>" autocomplete="off" required /></div>
					<div class="password"><input type="password"  placeholder="Password"  name="pass" autocomplete="off" required /></div>
                </div>
                <button class="signin-button"  name="valider" value="S'authentifier" >LOG IN</button>
				<?php if((!empty($message))&&($login !== "" )&&( $pass !== "")){ ?>
				<div id="message"><?php echo $message ?></div>
				<?php } ?>
            </div>
		</form>	
	</body>
</html>