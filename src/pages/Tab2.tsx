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
          <IonItem>
            <IonSelect placeholder="Quantidade">
              <IonSelectOption value="alface">2 Kgs</IonSelectOption>
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
        </IonCard>
      </IonContent>
    </IonGrid>
  );

};

export default Tab2;
