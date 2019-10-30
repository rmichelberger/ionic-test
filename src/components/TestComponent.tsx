import { 
    IonCard, 
    IonCardHeader,  
    IonCardTitle,
    IonCardContent, 
    withIonLifeCycle,
} from '@ionic/react';
import React from 'react';

class TestComponent extends React.PureComponent<{ test: string }> {
    public ionViewDidEnter() {
        console.log(`TestComponent ${this.props.test}: ionViewDidEnter`);
    }

    public render() {
        return (
            <IonCard>
                <IonCardHeader>
                    <IonCardTitle>Test Component {this.props.test}</IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                    Keep close to Nature's heart... and break clear away, once in awhile,
                    and climb a mountain or spend a week in the woods. Wash your spirit clean.
                </IonCardContent>
            </IonCard>
        );
    };
}

export default withIonLifeCycle(TestComponent);
