import { useAuth } from "lib/hooks/useAuth";
import { AppBar } from "components/appbar";
import { Title } from "ui/title"


function ToDoPage(props) {
  const user = useAuth();

  if (!user) {
    return (
      <>
        <AppBar></AppBar>
        <Title>YOURE NOT WELCOME, GO AWAY</Title>
      </>)
  }

  return (
    <>
      <AppBar />
      <Title>Render The User Todo List</Title>
    </>
  )

}

export default ToDoPage;
