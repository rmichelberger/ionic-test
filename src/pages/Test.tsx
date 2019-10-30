import { 
  IonButtons, 
  IonContent, 
  IonHeader, 
  IonMenuButton, 
  IonPage, 
  IonTitle, 
  IonToolbar,
} from '@ionic/react';
import React from 'react';
import TestComponent from '../components/TestComponent';

class TestPage extends React.PureComponent<{}> {
  public render() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>List</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent>
          <TestComponent test="A" />
          <TestComponent test="B" />
          <TestComponent test="C" />
          <TestComponent test="D" />
        </IonContent>
      </IonPage>
    );
  };
}

export default TestPage;
