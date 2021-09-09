<!DOCTYPE html>
<html>
	<head>
		<title>Milestone 2</title>
		<meta charset="UTF-8">
		<link rel="stylesheet" type="text/css" href="css/style.css">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.1.0/styles/googlecode.min.css">
		<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.1.0/highlight.min.js"></script>
	</head>
	<body>
		<div class="container">
			<h1>Milestone 2</h1>
			<div class="q-listing">
				<ul>
					<li>
						<h3 id="q1">Question 1</h3>
						<h4 id="q1a">Part A</h4>
						<button type="button" class="collapsible">Show Code</button>
						<div class="content">
							<div class="q-content">
								<pre>
									<code class="language-javascript">
<?php
	//correct JavaScript file
	$f = "js/ms2/q1/partA.js";
	
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
	$f = "js/ms2/q2.js";
	
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
<?php
	//echo test link
	echo "<a href=\"doRender.php?q=3&s=" . $b . "\">Test Code</a>";
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