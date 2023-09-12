import Button from "./Button";

export default function Friend({ friend, onSelection, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend.id;

  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          Você deve para {friend.name} R${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} deve para você R${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance === 0 && <p>Você é {friend.name} estão quites</p>}

      <Button onClick={() => onSelection(friend)}>
        {isSelected ? "Fechar" : "Selecionar"}
      </Button>
    </li>
  );
}
