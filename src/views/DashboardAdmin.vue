<template>
	<div class="container">
		<div id="main-grid">
			<div class="left-sidebar">
				<img class="jelly-pages-logo" src="./../assets/jelly-pages-logo.png" />
				<div>Statystyki</div>
				<div>Wpisy</div>
				<div>PodStrony</div>
				<div>Ustawienia</div>
			</div>

			<div class="right-sidebar">
				<div class="top-navigation">
					<div class="top-navigation-left">
						<img id="toggle-sidebar" src="./../assets/feather/menu.svg" />
						<div class="see-home-page">
							<img src="./../assets/feather/eye.svg" />
							Zobacz Stronę
						</div>
					</div>
					<div id="nav">
						<router-link to="/"> </router-link>
						<router-link to="/dashboard-admin">DashBoard</router-link>
					</div>
				</div>

				<h2>Statystyki</h2>

				<div class="charts">
					<JellyLineChart title="wyświetlenia witryny - ostatnie 30 dni" chartId="chart1"></JellyLineChart>
					<JellyLineChart title="nowi użytkownicy - ostatnie 30 dni" chartId="chart2"></JellyLineChart>
				</div>

				<h2>Nowa aktywność na stronie</h2>
				<span class="centered-flex table-box">
					<JellyTable tableWidth="100%" :dotWidth="['30%','60%','30%']" :headings="tableHeadings"
						:tableData="tableData"></JellyTable>

				</span>
			</div>
		</div>
	</div>
</template>

<script setup>
	import JellyLineChart from "../components/JellyLineChart.vue";
	import JellyTable from "../components/JellyTable.vue";
	import {
		ref
	} from 'vue';

	function generateButton(link) {
		return `<a href=${link}>Link</a>`
	};

	const tableHeadings = ref(['użytkownik', 'treść', 'podgląd']);
	const tableData = ref([
		['Adam', 'Komentarz: It sounds very good', generateButton('www.tibia.pl')],
		['Marcin', 'Ocena: 10 / 10 ', generateButton('www.tibia.pl')],
		['Piotr', 'Komentarz: Good luck!', generateButton('www.tibia.pl')]
	]);
</script>

<style lang="scss" scoped>
	h2 {
		margin-left: 2vw;
	}

	.container {
		width: 100vw;
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	#main-grid {
		width: 100%;
		display: flex;
		align-items: flex-start;
		flex-direction: row;
		background: #14242d;
		overflow-y: hidden;
	}

	.left-sidebar {
		width: 15%;
		height: 100vh;
		display: flex;
		align-items: center;
		flex-direction: column;
		background: #14242d;
		background-repeat: repeat;
		padding-top: 1vw;
	}

	.left-sidebar div {
		font-size: 1.5vw;
		color: white;
		margin-bottom: 1vw;
		background: #00000057;
		width: 100%;
		padding: 1vw 0;
		cursor: pointer;
	}

	.left-sidebar div:hover {
		background: #42b983;
		color: rgb(8, 68, 48);
	}

	.right-sidebar {
		width: 85%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		overflow-y: scroll;
		background-color: #f2f4f8;
		min-height: 110vh;
	}

	#nav {
		margin-right: 2vw;
	}

	#nav a {
		font-weight: bold;
		color: #2c3e50;
		font-size: 30px;
	}

	#nav a.router-link-exact-active {
		color: #42b983;
	}

	.jelly-pages-logo {
		width: 55%;
		margin-top: 1vw;
		margin-bottom: 4vw;
	}

	.top-navigation {
		display: flex;
		justify-content: space-between;
		flex-direction: row;
		align-items: center;
		width: 100%;
		background: #e8e8e8;
	}

	.see-home-page {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		flex-direction: row;
		padding: 1vw;
		font-weight: bold;
		background: rgb(180, 215, 255);

		img {
			margin-right: 0.7vw;
		}
	}

	.top-navigation-left {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		flex-direction: row;
	}

	#toggle-sidebar {
		padding: 1vw 3vw;
		padding-left: 1vw;
		background: #42b983;
	}

	.charts {
		width: 100%;
		display: flex;
		justify-content: flex-start;
	}

	.charts div {
		margin: 2vw;
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	#chart1-box {
		width: 60vw;
		height: 20vw;
		background-color: white;
	}

	#chart2-box {
		width: 30vw;
		background-color: white;
	}

	.table-box {
		margin: 1.5vw;
		width: 81vw;
	}
</style>
