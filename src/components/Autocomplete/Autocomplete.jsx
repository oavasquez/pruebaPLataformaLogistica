import React from 'react';
import PropTypes from 'prop-types';
import deburr from 'lodash/deburr';
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import Popper from '@material-ui/core/Popper';
import { withStyles } from '@material-ui/core/styles';

const suggestions = [
    { label: 'Yalemni Arrateguibel Carrandi' },
    { label: 'Vaiolet Ochandiano Castillo' },
    { label: 'Melani Rujido Iravedra' },
    { label: 'Diosmary Soriano Barzana' },
    { label: 'Madai Rivet Porta' },
    { label: 'Jayline Jaquinot Fresco' },
    { label: 'Nubia Belandia Alcedo' },
    { label: 'Tessa Llera ViÑambre' },
    { label: 'Eleonora Lin Tezanos' },
    { label: 'Wiliwaldo Legazpi Cepeda' },
    { label: 'Bautista Elano Sando' },
    { label: 'Leonidas Gorvea Espino' },
    { label: 'Fidel CalviÑo Ruimonte' },
    { label: 'Arantxa Baro Almansa' },
    { label: 'Abelardo Albizuri Queduro' },
    { label: 'Keidy Maldonado Terrazos' },
    { label: 'Leyre Uja Ganado' },
    { label: 'Eros OÑiderra Ruilopez' },
    { label: 'David Ocouto Tumiraos' },
    { label: 'Viridiana Oyaga Izmendi' },
    { label: 'Vanina Henestrosa Francos' },
    { label: 'Edilberto Fonseca Meldasgoas' },
    { label: 'Mateo Oceta CadiÑanos' },
    { label: 'Celestino Tiedra Juan' },
    { label: 'Laila Arenchen Gallega' },
    { label: 'Jordana Villarruel Cuadrillero' },
    { label: 'Joselina Minjaraz Ontavilla' },
    { label: 'Octavio Sarria Ubilla' },
    { label: 'Ximena Santa Liendo' },
    { label: 'Zulma Herrero Arsuaga' },
    { label: 'Reinaldo Juez Jordan' },
    { label: 'Arely Cedron Cespedes' },
    { label: 'Cordelia Emesabel Entrena' },
    { label: 'Lesly Villarprego Burriaga' },
    { label: 'Hatziri Ruescas Olmedilla' },
    { label: 'Katherine Ibisate Arrocha' },
    { label: 'Ligia Acha Bidania' },
    { label: 'Nitzia Roberto Rois' },
    { label: 'Tamara Mon Cesura' },
    { label: 'Quintin Pintado Briz' },
    { label: 'Ambar Ardazun Lordaliego' },
    { label: 'Camelia Raiz Gudiel' },
    { label: 'Fausto Paderniga Peramato' },
    { label: 'Etna Zaldivar Rebollo' },
    { label: 'Heverh Gomara Nembro' },
    { label: 'Julieta Larrinaga Barbajero' },
    { label: 'Valiet Castejana Ochagavia' },
    { label: 'Elia Lizaur Mancebo' },
    { label: 'Nicole Cerezal Prelo' },
    { label: 'Mireya Ontiveros Algorta' }
];

function renderInputComponent(inputProps) {
    const { classes, inputRef = () => { }, ref, ...other } = inputProps;

    return (
        <TextField
          
            fullWidth
            InputProps={{
                inputRef: node => {
                    ref(node);
                    inputRef(node);
                },
                classes: {
                    input: classes.input,
                },

            }}
            {...other}
          

        />
    );
}

function renderSuggestion(suggestion, { query, isHighlighted }) {
    const matches = match(suggestion.label, query);
    const parts = parse(suggestion.label, matches);

    let arreglo = suggestion.label.split(query)

    return (
        <MenuItem selected={isHighlighted} component="div">

            <div>
                <strong key={String(1)} style={{ fontWeight: 300 }}>
                    {arreglo[0]}
                </strong>
                <span key={String(2)} style={{ fontWeight: 500 }}>
                    {query}
                </span>
                <strong key={String(3)} style={{ fontWeight: 300 }}>
                    {arreglo[1]}
                </strong>

            </div>
        </MenuItem>
    );
}

function getSuggestions(value) {
    const inputValue = deburr(value.trim()).toLowerCase();
    const inputLength = inputValue.length;
    let count = 0;

    return inputLength === 0
        ? []
        : suggestions.filter(suggestion => {
            const keep =
                suggestion.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1;


            if (keep) {
                count += 1;
            }

            return keep;
        });
}

function getSuggestionValue(suggestion) {
    return suggestion.label;
}

const styles = theme => ({
    root: {
        height: 50,
        flexGrow: 1,
    },
    container: {
        position: 'relative',
    },
    suggestionsContainerOpen: {
        position: 'absolute',
        zIndex: 1,
        marginTop: theme.spacing.unit,
        left: 0,
        right: 0,
    },
    suggestion: {
        display: 'block',
    },
    suggestionsList: {
        margin: 0,
        padding: 0,
        listStyleType: 'none',
    },
    divider: {
        height: theme.spacing.unit * 2,
    },
});

class Autocomplete extends React.Component {
    popperNode = null;

    state = {
        single: '',
        popper: '',
        suggestions: [],
    };

    handleSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: getSuggestions(value),
        });
    };

    handleSuggestionsClearRequested = () => {
        this.setState({
            suggestions: [],
        });
    };

    handleChange = name => (event, { newValue }) => {
        this.setState({
            [name]: newValue,
        });
        this.props.seleccionNombre(newValue)
    };

    render() {
        const { classes,value} = this.props;
      


        const autosuggestProps = {
          
            renderInputComponent,
            suggestions: this.state.suggestions,
            onSuggestionsFetchRequested: this.handleSuggestionsFetchRequested,
            onSuggestionsClearRequested: this.handleSuggestionsClearRequested,
            getSuggestionValue,
            renderSuggestion,
        };

        return (
            <div className={classes.root}>
                <Autosuggest
                    {...autosuggestProps}
                    inputProps={{
                        classes,
                        placeholder: 'Nombre del cliente',
                        value: value,
                        onChange: this.handleChange('single'),
                       
                    }}
                    theme={{
                        container: classes.container,
                        suggestionsContainerOpen: classes.suggestionsContainerOpen,
                        suggestionsList: classes.suggestionsList,
                        suggestion: classes.suggestion,
                    }}
                    renderSuggestionsContainer={options => (
                        <Paper {...options.containerProps} square>
                            {options.children}
                        </Paper>
                    )}
                />
            </div>
        );
    }
}

Autocomplete.propTypes = {
    classes: PropTypes.object.isRequired,
    defaultValue: PropTypes.string,
};

export default withStyles(styles)(Autocomplete);