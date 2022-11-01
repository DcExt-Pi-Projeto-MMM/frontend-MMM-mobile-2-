import { IonList, IonImg, IonSelect, IonSelectOption, IonContent, IonGrid, IonHeader, IonItem, IonCol, IonPage, IonRow, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonIcon, IonButton  } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import { pin, wifi, wine, warning, walk, basketOutline, callOutline, personOutline, logoInstagram, logoWhatsapp, atCircleOutline } from 'ionicons/icons';

const Tab2: React.FC = () => {
  return (
    
    <IonGrid>
      <IonContent className='ion-padding' fullscreen>
        <IonCard>
          <IonImg src='https://marketsplash.com/content/images/2021/11/BANT-sales.png'></IonImg>
          <IonCardHeader>
            <IonCardTitle>O que deseja vender?</IonCardTitle>
          </IonCardHeader>
          <IonItem lines='none'>
            <IonSelect placeholder="Produto">
              <IonSelectOption value="alface">Alface</IonSelectOption>
              <IonSelectOption value="arroz">Arroz</IonSelectOption>
              <IonSelectOption value="tomate">Tomate</IonSelectOption>
              <IonSelectOption value="banana">Banana</IonSelectOption>
              <IonSelectOption value="melancia">Melancia</IonSelectOption>
              <IonSelectOption value="milho">Milho</IonSelectOption>
              <IonSelectOption value="feijao">Feijão</IonSelectOption>
              <IonSelectOption value="abacaxi">Abacaxi</IonSelectOption>
              <IonSelectOption value="batata">Batata</IonSelectOption>
              <IonSelectOption value="coentro">Coentro</IonSelectOption>
              <IonSelectOption value="inhame">Inhame</IonSelectOption>
              <IonSelectOption value="macaxeira">Macaxeira</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem lines='none'>
            <IonSelect placeholder="Quantidade">
              <IonSelectOption value="um">1</IonSelectOption>
              <IonSelectOption value="dois">2</IonSelectOption>
              <IonSelectOption value="tomate">3</IonSelectOption>
              <IonSelectOption value="quatro">4</IonSelectOption>
              <IonSelectOption value="cinco">5</IonSelectOption>
              <IonSelectOption value="seis">6</IonSelectOption>
              <IonSelectOption value="sete">7</IonSelectOption>
              <IonSelectOption value="oito">8</IonSelectOption>
              <IonSelectOption value="nove">9</IonSelectOption>
              <IonSelectOption value="dez">10</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem lines='none'>
            <IonSelect placeholder="Medida">
              <IonSelectOption value="gramas">Gramas</IonSelectOption>
              <IonSelectOption value="quilos">Quilos</IonSelectOption>
              <IonSelectOption value="pes">Pés</IonSelectOption>
              <IonSelectOption value="unidades">Unidades</IonSelectOption>
              <IonSelectOption value="saca">Saca</IonSelectOption>
              <IonSelectOption value="arroba">Arroba</IonSelectOption>
            </IonSelect>
          </IonItem>
        </IonCard>
        <IonGrid>
          <IonRow className='ion-align-items-center'>
            <IonCol className='ion-text-center'>
              <IonButton size='default' color='primary' shape='round'>Vender
                <IonIcon slot='start' icon={pin}></IonIcon>
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonGrid>
  );

};

export default Tab2;
