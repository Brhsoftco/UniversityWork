<!DOCTYPE html>
<html>
	<head>
		<title>Milestone 1</title>
		<meta charset="UTF-8">
		<link rel="stylesheet" type="text/css" href="css/style.css">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.1.0/styles/googlecode.min.css">
		<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.1.0/highlight.min.js"></script>
	</head>
	<body>
		<div class="container">
			<h1>Milestone 1</h1>
			<div class="q-listing">
				<ul>
					<li>
						<h3 id="q1">Question 1</h3>
<<<<<<< HEAD:BInfoTech/1701ICT - Creative Coding/Assignments/Assignment2/ms1.php
=======
						<h4 id="q1a">Part A</h4>
>>>>>>> ebd32326eb8b4a15087cd8b1d8c2398adf8e0777:Assignments/assignment1/ms2.php
						<button type="button" class="collapsible">Show Code</button>
						<div class="content">
							<div class="q-content">
								<pre>
									<code class="language-javascript">
<?php
	//correct JavaScript file
<<<<<<< HEAD:BInfoTech/1701ICT - Creative Coding/Assignments/Assignment2/ms1.php
	$f = "js/ms1/q1.js";
=======
	$f = "js/ms2/q1/partA.js";
>>>>>>> ebd32326eb8b4a15087cd8b1d8c2398adf8e0777:Assignments/assignment1/ms2.php
	
	//question base64 code
	$b = "";
	
	//ensure it exists to avoid errors
	if (file_exists($f)) {
	
		//read JavaScript file for question
		$q = file_get_contents($f);
		
		//base64 encode question
		$b = base64_encode($f);
		
		//echo question
		echo $q;
	}
?>
									</code>
								</pre>
							</div>
						</div>
<<<<<<< HEAD:BInfoTech/1701ICT - Creative Coding/Assignments/Assignment2/ms1.php
=======
						<h4 id="q1b">Part B</h4>
						<button type="button" class="collapsible">Show Code</button>
						<div class="content">
							<div class="q-content">
								<pre>
									<code class="language-javascript">
<?php
	//correct JavaScript file
	$f = "js/ms2/q1/partB.js";
	
	//question base64 code
	$b = "";
	
	//ensure it exists to avoid errors
	if (file_exists($f)) {
	
		//read JavaScript file for question
		$q = file_get_contents($f);
		
		//base64 encode question
		$b = base64_encode($f);
		
		//echo question
		echo $q;
	}
?>
									</code>
								</pre>
							</div>
						</div>
>>>>>>> ebd32326eb8b4a15087cd8b1d8c2398adf8e0777:Assignments/assignment1/ms2.php
						<p>
<?php
	//echo test link
	echo "<a href=\"doRender.php?q=1&s=" . $b . "\">Test Code</a>";
?>
						</p>
					</li>
					<li>
						<h3 id="q2">Question 2</h3>
						<button type="button" class="collapsible">Show Code</button>
						<div class="content">
							<div class="q-content">
								<pre>
									<code class="language-javascript">
<?php
	//correct JavaScript file
	$f = "js/ms1/q2.js";
	
	//ensure it exists to avoid errors
	if (file_exists($f)) {
	
		//read JavaScript file for question
		$q = file_get_contents($f);
		
		//base64 encode question
		$b = base64_encode($f);
		
		//echo question
		echo $q;
	}
?>
									</code>
								</pre>
							</div>
						</div>
						<p>
<<<<<<< HEAD:BInfoTech/1701ICT - Creative Coding/Assignments/Assignment2/ms1.php
=======
<?php
	//echo test link
	echo "<a href=\"doRender.php?q=2&s=" . $b . "\">Test Code</a>";
?>
						</p>
					</li>
					<li>
						<h3 id="q3">Question 3</h3>
						<button type="button" class="collapsible">Show Code</button>
						<div class="content">
							<div class="q-content">
								<pre>
									<code class="language-javascript">
<?php
	//correct JavaScript file
	$f = "js/ms2/q3.js";
	
	//ensure it exists to avoid errors
	if (file_exists($f)) {
	
		//read JavaScript file for question
		$q = file_get_contents($f);
		
		//base64 encode question
		$b = base64_encode($f);
		
		//echo question
		echo $q;
	}
?>
									</code>
								</pre>
							</div>
						</div>
						<p>
>>>>>>> ebd32326eb8b4a15087cd8b1d8c2398adf8e0777:Assignments/assignment1/ms2.php
<?php
	//echo test link
	echo "<a href=\"doRender.php?q=2&s=" . $b . "\">Test Code</a>";
?>
						</p>
					</li>
				</ul>
			</div>
			<p><a href="index.php">Back to listing</a></p>
			<script type="text/javascript">hljs.highlightAll();</script>
			<script type="text/javascript" src="js/util.js"></script>
		</div>
	</body>
</html>