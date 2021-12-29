<script setup>




</script>

<template>
	<router-view></router-view>
</template>

<style>
	.centered-flex {
		display: flex;
		width: 100%;
		justify-content: center;
		align-items: center;
	}

	@font-face {
		font-family: "Overlock";
		src: local("Overlock"), url(./assets/fonts/Overlock/Overlock-Regular.ttf) format("truetype");
	}

	* {
		font-family: Overlock;
	}

	body {
		overflow-x: hidden;
	}

	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}
</style>
