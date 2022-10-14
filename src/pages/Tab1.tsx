import { IonContent, IonGrid, IonHeader, IonItem, IonLabel, IonPage, IonTitle, 
IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, 
IonIcon, IonButton, IonImg  } from '@ionic/react';

import ExploreContainer from '../components/ExploreContainer';
import { pin, wifi, wine, warning, walk, basketOutline, callOutline, personOutline, logoInstagram, logoWhatsapp, atCircleOutline } from 'ionicons/icons';
import './Tab1.css';

const Tab1: React.FC = () => {
  
  return (
    <IonPage>
      <IonContent className='ion-padding' fullscreen>
        <IonCard>
          <IonImg src='https://marketsplash.com/content/images/2022/06/Compass-logo-1.png'></IonImg>
          <IonCardHeader>
            <IonCardTitle>Como usar o aplicativo?</IonCardTitle>
          </IonCardHeader>
          <IonItem lines='none' >
            <IonIcon icon={basketOutline} slot="start" />
            <IonLabel>Vender</IonLabel>
          </IonItem>
          <IonCardContent>
            Se deseja anunciar e vender sua colheita, clique em vender. 
          </IonCardContent>
          <IonItem lines='none' >
            <IonIcon icon={personOutline} slot="start" />
            <IonLabel>Minha Conta</IonLabel>
          </IonItem>
          <IonCardContent>
            Aqui você encontra todas as informações relacionadas a sua conta pessoal.
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonImg src='https://marketsplash.com/content/images/2022/02/Cold-Outreach.png'></IonImg>
          <IonCardHeader>
            <IonCardTitle>Ainda com dúvidas? Contate-nos!</IonCardTitle>
          </IonCardHeader>
          <IonItem lines='none' >
            <IonIcon icon={logoWhatsapp} slot="start" />
            <IonLabel>(11) 97849-2270</IonLabel>
          </IonItem>
          <IonItem lines='none' >
            <IonIcon icon={atCircleOutline} slot="start" />
            <IonLabel className='ion-text-wrap'>https://www.mudameumundo.com.br/</IonLabel>
          </IonItem>
          <IonItem lines='none' >
            <IonIcon icon={logoInstagram} slot="start" />
            <IonLabel className='ion-text-wrap'>@mudameumundo</IonLabel>
          </IonItem>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
