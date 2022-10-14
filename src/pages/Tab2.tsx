import { IonList, IonImg, IonSelect, IonSelectOption, IonContent, IonGrid, IonHeader, IonItem, IonLabel, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonIcon, IonButton  } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    
    <IonGrid>
      <IonContent className='ion-padding' fullscreen>
        <IonCard>
          <IonImg src='https://marketsplash.com/content/images/2021/11/BANT-sales.png'></IonImg>
          <IonCardHeader>
            <IonCardTitle>O que deseja vender?</IonCardTitle>
          </IonCardHeader>
          <IonItem>
            <IonSelect placeholder="Select fruit">
              <IonSelectOption value="apples">Apples</IonSelectOption>
              <IonSelectOption value="oranges">Oranges</IonSelectOption>
              <IonSelectOption value="bananas">Bananas</IonSelectOption>
            </IonSelect>
          </IonItem>
        </IonCard>
      </IonContent>
    </IonGrid>
  );

};

export default Tab2;
