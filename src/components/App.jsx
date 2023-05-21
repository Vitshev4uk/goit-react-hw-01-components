import ProfileCard from "./ProfileCard/ProfileCard";
import Statistics from "./Statistics/Statistics";
import data from 'data/data.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <ProfileCard />
      <Statistics stats={ data } />
    </div>
  );
};
