import { IonContent, IonImg, IonHeader, IonItem, IonLabel, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonIcon, IonButton  } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import { pin, wifi, wine, warning, walk, basketOutline, callOutline, personOutline, logoInstagram, logoWhatsapp, atCircleOutline } from 'ionicons/icons';


const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonContent className='ion-padding' fullscreen>
        <IonCard>
          <IonImg src='https://marketsplash.com/content/images/2022/08/30-Best-No-Code-Software-Tools-1.png'></IonImg>
          <IonCardHeader>
            <IonCardTitle>Meu Perfil</IonCardTitle>
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
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
