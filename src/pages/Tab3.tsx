import React from 'react';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle } from '@ionic/react';

const Tab3Page: React.FunctionComponent = () => {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab Three</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Tab Three</IonCardTitle>
            <IonCardSubtitle>Under construction</IonCardSubtitle>
          </IonCardHeader>
        </IonCard>
      </IonContent>
    </>
  );
};

export default Tab3Page;
