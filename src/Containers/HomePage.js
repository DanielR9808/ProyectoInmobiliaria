
import React, {Component} from 'react'
import PrincipalSearch from '../Components/PrincipalSearch/PrincipalSearch'
import axios from 'axios'
import Seeder from './../Schemas/SeederImmovable'
import './../Containers/HomePage.css'
import AutoText from '../Components/Inputs/AutofillerText'
import Selects from '../Components/Inputs/Selects'
import Immo from './../Components/Cards/immovableCard'


const cityZones=["Ciudadela Atalaya","Ciudadela La Libertad","Comuna del centro","Aeropuerto","Aniversario Uno"
,"Antonia Santos","Belén", "Belisario","Barrio Blanco","Boconó","Callejón","Carora","Ceiba II","Chapinero",
"Ciudad Jardín","Claret","Colsag","Comuneros","Toponimia -El Contento-","Cundinamarca","La Cabrera","La Ermita"
,"El Escobal","Guaimaral","La Insula","Latino","Las Margaritas","Niza","Los Pinos","La Playa", "Prados del Norte",
"Quinta Bosch","Quinta Oriental","El Rodeo","Salado","San Luís","San Martín","San Miguel","San Rafael","Santander",
"Trigal del Norte","Tucunaré"];

const pTypes=["Compra Nuevo", "Compra Usado","Compra Nuevo y Usado", "Arriendo"];

const iTypes=["Casa","Apartamento","Oficina","Bodega","Consultorio","Locale","Lote","Finca"];


class HomePage extends Component {


    

        state = {
           
            purchaseType: "Compra Nuevo",
            immovableType:"Casa",
            area:"" , 
            immovable:[],
            currentPageUrl:`/api/immovable?limit=5&page=1&immovable[area]=&immovable[type]=&immovable[state]=`,
            nextPageUrl: "",
            prevPageUrl:"",    
            submit:false
        }
    

    
    getImmovable=()=>{
          
          console.log(this.state.currentPageUrl)
            let cancel
            axios.get(this.state.currentPageUrl,{
                cancelToken: new axios.CancelToken(c => cancel = c)
            }).then(res =>{
                this.setState({
                    nextPageUrl: `/api/immovable?limit=${res.data.next.limit}&page=${res.data.next.page}&immovable[area]=${this.state.area.replace(" ","+")}&immovable[type]=${this.state.immovableType.replace(" ","+")}&immovable[state]=${this.state.purchaseType.replace(" ","+")}`,
                    immovable:res.data.results
                })
                   
                console.log(this.state.immovable)
                    if(res.data.previous){
                        this.setState({
                            prevPageUrl:`/api/immovable?limit=${res.data.previous.limit}&page=${res.data.previous.page}&immovable[area]=${this.state.area.replace(" ","+")}&immovable[type]=${this.state.immovableType.replace(" ","+")}&immovable[state]=${this.state.purchaseType.replace(" ","+")}`
                 
                        })
                    } 
                    
                })
                return () => cancel()
          
        }

        componentDidMount(){
           
            this.getImmovable()
          
        }
 
      componentDidUpdate(prevProps,prevState){
    
           
            if(prevState.submit!==this.state.submit){
               this.getImmovable()
               console.log('submitted one')

            }else if(prevState.currentPageUrl!==this.state.currentPageUrl){
                this.getImmovable()
                console.log('page changed')
            }
            
        }
  
    handleChange  =event=>{
        const target = event.target;
        const value = target.value;
        const name = target.name;

        if(name==='immovableType'){
            this.setState({
              
                    [name]:  value,
                    purchaseType:this.state.purchaseType,
                    area:this.state.area
                });
        }else if(name==='purchaseType'){
            this.setState({
              
                    [name]:  value,
                    immovableType:this.state.immovableType,
                    area:this.state.area
                });
        }else{
            this.setState({
                
                    [name]:  value,
                    immovableType:this.state.immovableType,
                    purchaseType:this.state.purchaseType
                });
        }
        

    }
    handleSubmit = e =>{
        e.preventDefault()  
        var area= this.state.area.replace(' ','+')
        var iType=this.state.immovableType.replace(' ','+')
        var pType=this.state.purchaseType.replace(' ','+')
    
        this.setState(({submit,currentPageUrl}) =>({submit:!submit, 
            currentPageUrl:`/api/immovable?limit=5&page=1&immovable[area]=${area}&immovable[type]=${iType}&immovable[state]=${pType}`}));
      
    }
     goToNextPage = () =>{
        this.setState({
            currentPageUrl:this.state.nextPageUrl
        })
    }

    goToPrevPage = () => {

        this.setState({
            currentPageUrl:this.state.prevPageUrl
        })
    }

    render(){
        return (
            <div>
                 <div className="searchContainer">
                <form onSubmit={this.handleSubmit}>
                    <div className="selectContainer">
                        <Selects name='immovableType' handleChange={this.handleChange} value={this.state.immovableType} items={iTypes}> </Selects>
                    </div>
                    <div className="selectContainer">
                        <Selects name='purchaseType' handleChange={this.handleChange} value={this.state.purchaseType} items={pTypes}> </Selects>
                    </div>
                    <div className="textContainer">
                        <AutoText name='area'  handleChange={this.handleChange}  value={this.state.area} list="zones" />
                        <datalist id="zones" >
                            {cityZones.map((zone,index)=><option key={index}>{zone}</option>)}
                        </datalist>
                    </div>
                    <div className="btnContainer">
                        <button type='submit'>Buscar</button>
                    </div>
                </form> 
                </div> 
                <div className="immoContainer">
                    {this.state.immovable?this.state.immovable.map((immo,index)=>
                            <Immo key={index} immovable={immo}></Immo>
                    ):console.log('component not ready')}
                </div>
            
               
               <div className="buttonContainer">
                    <button onClick={this.goToPrevPage}>prev</button>
                    <button onClick={this.goToNextPage}>next</button>
               </div>
            </div>
           

               
           

        )
    }   
}
export default HomePage;