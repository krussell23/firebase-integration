import Link from 'next/link'
import { Button } from 'ui/buttons';

import { useAuth } from "lib/hooks/useAuth";
import { AppBar } from "components/appbar";
import { Title } from "ui/title"
import { PageLayout, PageHeader, PageFooter, PageBody } from 'layouts/loginpage'




function ToDoPage(props) {
  const user = useAuth();

  if (!user) {
    return (
      <>
        <AppBar></AppBar>
        <Title>YOU ARE NOT WELCOME, GO AWAY</Title>
      </>)
  }

  return (
    <>
      <AppBar />
      <PageLayout>
        <PageHeader>

          <Link href="/add-item">
            <Button bgcolor="#0fa9ec" color="#ffffff">Add A To Do List</Button>
          </Link>
        </PageHeader>

      </PageLayout>
    </>
  )
}

export default ToDoPage;
