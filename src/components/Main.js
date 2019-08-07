import React from 'react';
import Search from './Search';
import ProductGrid from './ProductsGrid';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error:null,
      isLoaded: false,
      query: '',
      items: [],
      filtered: []
    }
    this.textInput = this.textInput.bind(this);
    this.handleToUpdate = this.handleToUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  textInput(e){
    this.setState({
      query: e.target.value
    });
  };

  handleChange(e) {
    let currentState = [...this.state.items];
    let newState = [];
    this.textInput(e);
    if (e.target.value !== "") {
      newState = currentState.filter(item => {
        const colorTerms = item.variants.map(elem => {
          return elem.title;
        });

        const lc = [item.title, item.vendor, item.tags];
        const searchTerms = [...colorTerms, ...lc].map(elem => {
          return elem.toLowerCase().replace(/ /g, '');
        });
        const filter = e.target.value.toLowerCase();
        return searchTerms.find(elem => elem.includes(filter.replace(/ /g, '')));
      });
    } else { newState = [...this.state.items]; }

    this.setState({
      filtered: newState
    });
  }

  handleToUpdate(event){
    const variantClicked = event.target.id;
    const currentSwatch = event.target.parentNode.parentNode.id;

    let filteredHandler = [...this.state.filtered];
    filteredHandler[currentSwatch].variant = variantClicked;

    this.setState({filtered:filteredHandler});
  };

  componentDidMount() {
    const apiUrl = `https://young-refuge-33420.herokuapp.com/`;
    //const apiUrl = 'https://api.myjson.com/bins/eb639/'

    fetch(apiUrl)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.products,
            filtered: result.products
          });
        }
      )
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      items: nextProps.items
    });
  }

  render() {
    return(
      <main>
        <Search handleChange={this.handleChange} query={this.state.query} />
        <ProductGrid props={this.state} handleToUpdate={this.handleToUpdate}/>
      </main>
    )
  }
}

export default Main;