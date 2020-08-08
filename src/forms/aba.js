import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Calendar from '../step/calendar';
import { Ano, Mes, Tronco, Ramo, Dia, Hora, MV } from '../utils/steup';
import {  TextTronco, TextRamo, pontoAberto  } from '../utils/tabela';

const styles = theme => ({
    root: {
        minWidth: 275,
        textAlign: 'center',
        width: '100%',
        '& > * + *': {
          marginTop: theme.spacing(2),
        },
    },
    paper: {
        paddingTop: theme.spacing(4),
        justifyContent: 'center',
        height: 140,
        width: 220,
        backgroundColor: theme.palette.success.light,
    },
    info:{
        backgroundColor: theme.palette.background.default,
    },
    ponto: {
        padding: theme.spacing(2),
    }
   
});
class Aba extends Component {
    state = {
        ano: {tronco: '', ramo: ''},
        mes: {tronco: '', ramo: ''},
        dia: {tronco: '', ramo: ''},
        hora: {tronco: '', ramo: ''},
        ponto: '',
    }

    handleDataChange = (year, month, day, hours) =>{
        let valorAno = 0;
        let valorDiaTroco = 0;
        let valorDiaRamo = 0;
        let valorHoraTroco = 0;
        let valorHoraRamo = 0;
        let anoTronco = '';
        let mesTronco = '';
        let diaTronco = '';
        let horaTronco = '';
        let anoRamo = '';
        let mesRamo = '';
        let diaRamo = '';
        let horaRamo = '';

        const resDia = Dia(year, month, day)
      
        valorDiaTroco = Tronco(resDia);
        diaTronco = TextTronco(valorDiaTroco);
        valorHoraTroco = Tronco(Hora(valorDiaTroco,  hours));
        horaTronco = TextTronco(valorHoraTroco);
        
        this.setState({ponto: pontoAberto(valorDiaTroco,  hours)});

        valorDiaRamo = Ramo(resDia);
        diaRamo = TextRamo(valorDiaRamo);
        valorHoraRamo = Ramo(Hora(valorDiaTroco,  hours));
        horaRamo = TextRamo(valorHoraRamo);

        MV(valorDiaTroco, valorDiaRamo,  valorHoraTroco, valorHoraRamo);


        if( month === 0 ){
            year = year - 1;
        }

        valorAno = Tronco(Ano(year));
        anoTronco = TextTronco(valorAno);
        mesTronco = TextTronco(Tronco(Mes(valorAno,  month)));
        

        valorAno = Ramo(Ano(year));
        anoRamo = TextRamo(valorAno);
        mesRamo = TextRamo(Ramo(Mes(valorAno,  month)));
        
        
        
    

        this.setState({ 
            ano: {tronco:anoTronco,ramo:anoRamo}, 
            mes: {tronco:mesTronco,ramo:mesRamo}, 
            dia: {tronco:diaTronco, ramo:diaRamo},
            hora: {tronco: horaTronco, ramo:horaRamo}
        });
    };


    render() {
        const { classes } = this.props;
        const { ano, mes, dia, hora, ponto } = this.state;
        return (
            <>
                <Card className={classes.root} variant="outlined">
                    <Typography variant="h5" component="h2">
                        Cronacunputura
                    </Typography>
                    <Calendar
                    handleDataChange={this.handleDataChange}
                    />
                    <CardContent>
                        <Grid item xs={12}>
                            <Grid container justify="center" spacing={5}>
                                <Grid  item>
                                    <Paper elevation={3} className={classes.paper} >
                                        <Typography  variant="h6" gutterBottom>
                                            Ano
                                        </Typography>
                                        <Typography >
                                            {ano.tronco}
                                        </Typography>
                                        <Typography >
                                            {ano.ramo}
                                        </Typography>
                                    </Paper>
                                </Grid>
                                <Grid  item>
                                    <Paper elevation={3} className={classes.paper} >
                                    <Typography  variant="h6" gutterBottom>
                                        Mês
                                    </Typography>
                                    <Typography >
                                        {mes.tronco}
                                    </Typography>
                                    <Typography >
                                        {mes.ramo}
                                    </Typography>
                                    </Paper>
                                </Grid>
                                <Grid item>
                                    <Paper elevation={3} className={classes.paper} >
                                        <Typography  variant="h6" gutterBottom>
                                            Dia
                                        </Typography>
                                        <Typography >
                                            {dia.tronco}
                                        </Typography>
                                        <Typography >
                                            {dia.ramo}
                                        </Typography>
                                    </Paper>
                                </Grid>
                                <Grid item>
                                    <Paper elevation={3} className={classes.paper} >
                                    <Typography  variant="h6" gutterBottom>
                                        Hora
                                    </Typography>
                                    <Typography >
                                        {hora.tronco}
                                    </Typography>
                                    <Typography >
                                        {hora.ramo}
                                    </Typography>
                                    </Paper>
                                </Grid>
                            </Grid> 
                            { ponto && 
                            <Grid container justify="center" spacing={5}>
                                <Grid item lg={12}  xs={12}>
                                    <Paper elevation={3} className={classes.ponto} >
                                    <Typography  variant="h6" gutterBottom>
                                        PONTO ABERTO:  {ponto}
                                    </Typography>
                                    </Paper>
                                </Grid>
                            </Grid> 
                            }
                        </Grid>
                    </CardContent>
                </Card>
            </>
        )
      }
}
export default withStyles(styles, { withTheme: true })(Aba);