interface CardProps {
  name: string;
  age: number;
  hobby: string;
}

const Card = ({ name, age, hobby }: CardProps) => {
  return (
    <>
      <h1>Nome: {name}</h1>
      <p>Idade: {age}</p>
      <p>Hobby: {hobby}</p>
    </>
  );
};
export default Card;
