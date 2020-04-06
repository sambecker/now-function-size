import { NextPage, GetServerSideProps } from 'next';
import firebase from 'firebase';

const testPage: NextPage = () => {
  return <div>
    Test Page
  </div>
}

export const getServerSideProps: GetServerSideProps = async context => {
  return {
    props: {
      value: `${firebase.firestore.FieldValue}`
    }
  }
}

export default testPage;
