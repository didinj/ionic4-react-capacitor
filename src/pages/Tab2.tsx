import React from 'react';
import { RouteComponentProps } from 'react-router';
import { IonContent, IonHeader, IonCard, IonCardHeader, IonCardTitle, IonTitle, IonToolbar, IonCardSubtitle } from '@ionic/react';

const Tab2: React.FunctionComponent<RouteComponentProps> = ({ history }) => {

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab Two</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Tab Two</IonCardTitle>
            <IonCardSubtitle>Coming soon</IonCardSubtitle>
          </IonCardHeader>
        </IonCard>
      </IonContent>
    </>
  );
};

export default Tab2;