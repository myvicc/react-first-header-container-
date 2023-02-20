import React from "react";
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ShareLocationIcon from '@mui/icons-material/ShareLocation';
import NoCrashIcon from '@mui/icons-material/NoCrash';
import BuildIcon from '@mui/icons-material/Build';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import WysiwygIcon from '@mui/icons-material/Wysiwyg';
import InputIcon from '@mui/icons-material/Input';

const drawerWidth = 240;

function Menu(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                {['About GPS', 'How use', 'Equipment', 'Software'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                { index  === 0 && <ShareLocationIcon /> || index === 1 && <NoCrashIcon />
                                || index === 2 && <BuildIcon /> || index === 3 && <WysiwygIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['About us', 'Contacts', 'Demo'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index === 0 && <ContactPhoneIcon /> || index === 1 && <ContactPhoneIcon /> || index ===2 && <InputIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        GPS Monitoring
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >

                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Typography paragraph>
                    После установки оборудование GPS мониторинга (GPS маяк, датчик уровня топлива, линейка, расходомер), Вы можете с любого компьютера (планшета, смартфона) получать всю необходимую информацию как в реальном времени, так и за интересующий период о местоположении, скорости, моточасах, заправках и сливах, отклонениях от маршрута, нарушениях и тд
                </Typography>
                <Typography paragraph>
                    Wialon – это самая современная и многофункциональная система GPS мониторинга автотранспорта и др объектов. Более 1 600 000 подключенных объектов мониторинга.
                    Программное обеспечение разработано компанией  Gurtam (Беларусь). За более чем 10-летний опыт работы  программа  Wialon  стала лидером в данной сфере и  используется более чем в 50 странах мира.
                    Программа известна своей стабильностю, эффективностью, лёгкой масштабируемостью. Количество успешно работающих сервисов GPS мониторинга на базе платформы Wialon постоянно растёт и географически расширяется.
                </Typography>
            </Box>
        </Box>
    );
}

Menu.propTypes = {
    window: PropTypes.func,
};

export default Menu;
