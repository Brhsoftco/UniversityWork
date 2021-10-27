<!DOCTYPE html>
<html>
	<head>
		<title>Render</title>
		<meta charset="UTF-8">
		<link rel="stylesheet" type="text/css" href="css/style.css">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.1.0/styles/googlecode.min.css">
		<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.min.js"></script>
		<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/molleindustria/p5.play/lib/p5.play.js"></script>
		<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/addons/p5.sound.min.js"></script>
		<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.1.0/highlight.min.js"></script>
	</head>
	<body>
		<div class="container">
			<h1>Test Question <?= $_GET["q"] ?? ""; ?></h1>
				<div class="q-listing">
					<div class="q-content">
						<?php
						
							//check if script path was provided
							if (isset($_GET["s"]) && $_GET["s"] != "") {
							
								//all good, go ahead and decode path
								$s = base64_decode($_GET["s"]);
							
								//validation
								if ($s !== null && $s != "") {
								
									//read script
									$script = file_get_contents($s);

									//print code block
									echo "<h3>Code</h3>";
									echo '<button type="button" class="collapsible">Show Code</button>';
									echo '<div class="content">';
									echo "<pre><code class=\"language-javascript\">";
									echo $script;
									echo "</code></pre></div>";
								
									//print script
						?>
						<h3>Render</h3>
						<div class="q-render" id="render">
						<?php
									echo "<script>";
									echo $script;
									echo "</script>";
								}
								else {
									echo "<h3>Error</h3>";
									echo "<pre><code class=\"language-plaintext\">Invalid Base64 in GET parameter 's'</code></pre>";
								}
							}
							else {
								echo "<h3>Error</h3>";
								echo "<pre><code class=\"language-plaintext\">No JavaScript provided in GET parameter 's'</code></pre>";
							}
					?>
						</div>
					</div>
			</div>
			<p><a href="javascript:window.history.back()">Back to listing</a></p>
			<script type="text/javascript">hljs.highlightAll();</script>
			<script type="text/javascript" src="js/util.js"></script>
		</div>
	</body>
</html>