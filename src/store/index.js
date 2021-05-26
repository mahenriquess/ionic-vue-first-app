import { createStore } from 'vuex';

const store = createStore({
    state(){
        return {
			memories:[
				{
					id: 'm1',
					image: 'https://www.seumochilao.com.br/wp-content/uploads/2016/02/montanha2.jpg',
					title: 'A trip into the mountains',
					description: 'It was a really nice trip',
				},
				{
					id: 'm2',
					image: 'https://i0.wp.com/pranchanova.com/wp-content/uploads/2019/12/surfing-2212948_1920.jpg?fit=1020%2C588&ssl=1',
					title: "Surfing the seaside",
					description: "It was a really nice trip",
				},
				{
					id: 'm3',
					image: 'https://meubistro.com/blog/wp-content/uploads/2017/05/87715-dicas-de-jantar-da-escolha-do-cardapio-a-recepcao-dos-convidados.jpg',
					title: "Good eating",
					description: "Really tasty",
				}
			],
		}
    },
	mutations:{
		addMemory(state, memoryData){
			const newMemory = {
				id: new Date().toISOString(),
				title: memoryData.title,
				image: memoryData.imageUrl,
				description: memoryData.description
			};

			state.memories.unshift(newMemory);
		}
	},
	actions:{
		addMemory(context, memoryData){ 
			//utilizar este metodo para enviar para o BD
			context.commit('addMemory', memoryData);
		}
	},
    getters:{
        memories(state){
            return state.memories;
        },
		memory(state){
			return (memoryId) => {
				return state.memories.find((memory) => memory.id === memoryId);
			};
		}
    }
});

export default store;
