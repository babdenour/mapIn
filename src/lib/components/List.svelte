<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	let list: Object[] = [
		{
			category: 'Alimentation',
			alpha: [
				{ lettre: 'A', brand: ['Alto Café', 'Amorino'] },
				{ lettre: 'B', brand: ['Brasserie Olivium', 'BUBBLE BAR', 'Burger Bar by Quick'] },
			], // C: ['Camarosa', 'Columbus Café', 'Creams Factory', 'Crêpe Touch'],
			// F: ['Fresg Factory', 'Columbus Café', 'Creams Factory', 'Crêpe Touch'],
			// H: ['Half Time'],
			// K: ['KFC'],
			// L: ['Le Club Sandwich'],
			// M: ['Manhattan’s store', 'Mezzo Di Pasta'],
			// O: ["O'Tacos"],
			// P: ['Papaya Bar', 'PEPE MANZO', 'Pitaya', 'Pomme de Pain'],
			// S: ['Segafredo', 'Subway', 'Sushi Hanaka'],
			// V: ['Veng Hour'],
			// W: ['Waffle Factory', 'Wok ô King'],
			// Y: ['Yogugrt Factory'],
			// symbolesChiffres: ['+2Foot'],
		},

		// {
		// 	Cosmétique: {
		// 		symbolesChiffres: ['+2Foot'],
		// 		A: ['Adopt'],
		// 		B: ['Bar à S.Cils', 'Body Minute'],
		// 		D: ['Dépil Tech'],
		// 		F: ['Franck Provost'],
		// 		G: ['Générale d’Optique', 'Grand Optical'],
		// 		H: ["HAIR'minute"],
		// 		J: ['Jeff de Bruges'],
		// 		K: ['KIKO'],
		// 		L: ['La Boutique Du Coiffeur'],
		// 		M: ['M-A-C Cosmetics', 'Marionnaud'],
		// 		O: ['Optical Service OS+'],
		// 		P: ['Pharmacie'],
		// 		S: ['Saint Algue', 'Sephora'],
		// 		T: ['The Body Shop', 'Twenty Nails'],
		// 		W: ['Waffle Factory', 'Wok ô King'],
		// 		Y: ['Yves Rocher'],
		// 	},
		// },
		// {
		// 	Décration: {
		// 		A: ['Action'],
		// 		F: ['Flying Tiger Copenhagen'],
		// 		H: ['HEMA'],
		// 		M: ['MUY MUCHO'],
		// 		N: ['Normal'],
		// 		P: ['Pylônes'],
		// 	},
		// },

		// {
		// 	Habillement: {
		// 		A: ['ASICS', 'Au Masculin'],
		// 		B: ['Bershka', 'Biskuit Paris'],
		// 		C: ['Calzedonia', 'Celio', 'CHK', 'CIPO & BAXX'],
		// 		D: ['Devred 1902'],
		// 		E: ['Easy', 'Etam Lingerie'],
		// 		F: ['Foot Korner', 'Foot Locker', 'FORESTLAND'],
		// 		G: ['GUESS'],
		// 		H: ['H&M', 'HUNKEMÖLLER'],
		// 		I: ['Izac'],
		// 		J: ['Jennyfer', 'Jules'],
		// 		K: ['Kaporal', 'Kiabi', 'Kombak'],
		// 		L: ['Lacoste', 'Levi’s'],
		// 		M: ['Mango'],
		// 		N: ['NEW YORKER'],
		// 		O: ['OVS Kids'],
		// 		P: ['Pimkie Primark', 'Pull & Bear'],
		// 		S: ['Salsa', 'Sergent Major', 'Stradivarius'],
		// 		T: ["Tape à l'œil", 'Territoire Redskins'],
		// 		U: ['Undiz'],
		// 		X: ['X-CLUSIF'],
		// 		Z: ['ZARA', 'ZELYS'],
		// 	},
		// },
		// {
		// 	MultimédiasJouets: {
		// 		B: ['Bouygues Télécom'],
		// 		F: ['Free'],
		// 		G: ['GIBERT'],
		// 		H: ['Hubside'],
		// 		L: ['La Grande Récré'],
		// 		M: ['Maxxi Games'],
		// 		O: ['Orange'],
		// 		S: ['SFR'],
		// 	},
		// },
		// {
		// 	Services: {
		// 		symbolesChiffres: ['5àsec'],
		// 		A: ['Alter smoke'],
		// 		C: ['Cabinet dentaire', 'COM 9'],
		// 		L: ['La Cordonnerie'],
		// 		P: ['Photomaton', 'Promo Vacances'],
		// 	},
		// },

		// {
		// 	Sport: {
		// 		symbolesChiffres: ['+2foot'],
		// 		A: ['Adidas Originals', 'ASICS'],
		// 		B: ['BioTech USA'],
		// 	},
		// },
	];

	// List.Alimentation.forEach(element => {
	// });
	// console.log(list);
	const dispatch = createEventDispatcher();

	const handleClickItem = (item) => {
		dispatch('click-item', { item });
	};
</script>

<!-- list hide listItems in Subtitle -->
<!-- alphabetical sort with bold -->

<div class="list">
	{#each list as listItems}
		<ul>
			<p>{listItems.category} ⬇</p>
			<br />
			{#each listItems.alpha as items}
				<ul on:click={() => handleClickItem(items.lettre)}>
					<h4>{items.lettre}</h4>
					{#each items.brand as item}
						<li on:click={() => handleClickItem(item)}>{item}</li>
					{/each}
					<br />
				</ul>
			{/each}
		</ul>
	{/each}
</div>

<style lang="scss" scoped>
	@import '../../style/app.scss';

	.list {
		width: 100%;
		height: 57vh;
		display: flex;
		flex-direction: column;
		p,
		li {
			color: $red-primary;
			font-weight: bold;
			list-style-type: none;
		}
	}
</style>
