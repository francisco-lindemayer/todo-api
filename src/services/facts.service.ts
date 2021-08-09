import axios from 'axios';

interface IDogFacts {
  _id: string;
  __v: number;
  text: string;
  updatedAt: Date;
  deleted: boolean;
  source: string;
  sentCount: number;
}

export const getRandomDogFacts = async (): Promise<string[]> => {
  try {
    const ANIMAL_TYPE = 'dog';
    const AMOUNT_FACTS = 3;
    const { data } = await axios.get<IDogFacts[]>(`https://cat-fact.herokuapp.com/facts/random?animal_type=${ANIMAL_TYPE}&amount=${AMOUNT_FACTS}`, { timeout: 1000 });

    return data.map(({ text }) => text);
  } catch (error) {
    console.error('Falha ao buscar fatos. Fatos obtidos localmente');
    return ['A impressão do nariz de um cachorro é tão única quanto uma impressão digital humana', 'Os cachorro suam pelas patas', 'Cauda do seu cão é realmente parte de sua espinha'];
  }
}