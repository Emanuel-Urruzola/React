import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
  {
    name: "Pazos64",
    userName: "Pazos64",
    isFollowing: true,
  },
  {
    userName: "midudev",
    name: "Miguel Ángel Durán",
    isFollowing: false,
  },
];

export function App() {
  //const formatUserName = (userName) => `@${userName}`;
  return (
    <section className="App">
      {users.map(({ userName, name, isFollowing }) => (
        <TwitterFollowCard
          key={userName}
          userName={userName}
          initialIsFollowing={isFollowing}
        >
          {name}
        </TwitterFollowCard>
      ))}
    </section>
  );
}
