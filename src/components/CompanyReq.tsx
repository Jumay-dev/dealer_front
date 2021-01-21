import React from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

function CompanyReq() {
    const [age, setAge] = React.useState('');
    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setAge(event.target.value as string);
    };
    return (
        <React.Fragment>
            <Typography component="h1" variant="h4" align="center">
                Реквизиты дилера
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <InputLabel id="demo-simple-select-label">Название компании</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    onChange={handleChange}
                    >
                    <MenuItem value={10}>ААА</MenuItem>
                    <MenuItem value={20}>Рога и копыта</MenuItem>
                    <MenuItem value={30}>Запасной вариант</MenuItem>
                    </Select>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <InputLabel id="demo-simple-select-label">Сотрудник</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    onChange={handleChange}
                    >
                    <MenuItem value={10}>ААА</MenuItem>
                    <MenuItem value={20}>Рога и копыта</MenuItem>
                    <MenuItem value={30}>Запасной вариант</MenuItem>
                    </Select>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Typography component="h2" variant="h6">
                        ИНН
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                        ААА
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Typography component="h2" variant="h6">
                        email
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                        ivan.ivanov@aaa.ru
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Typography component="h2" variant="h6">
                        Юридическое лицо
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                        ООО "ААА"
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Typography component="h2" variant="h6">
                        Страна
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                        Россия
                    </Typography>
                </Grid>
   
            </Grid>
        </React.Fragment>
    )
}

export default CompanyReq