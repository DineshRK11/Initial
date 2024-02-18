

// material-ui
import { styled
    // , useTheme 
} from '@mui/material/styles';
import {
    // Avatar,
    Card,
    CardContent,
    Typography,
    // Grid,
    // LinearProgress,
    // List,
    // ListItem,
    // ListItemAvatar,
    // ListItemText,
    // linearProgressClasses
} from '@mui/material';
import { TreeView } from '@mui/x-tree-view/TreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


// assets
// import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';

// styles
// const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
//     height: 10,
//     borderRadius: 30,
//     [`&.${linearProgressClasses.colorPrimary}`]: {
//         backgroundColor: '#fff'
//     },
//     [`& .${linearProgressClasses.bar}`]: {
//         borderRadius: 5,
//         backgroundColor: theme.palette.primary.main
//     }
// }));

const CardStyle = styled(Card)((
    // { theme }
    ) => ({
    // background: theme.palette.primary.light,
    marginBottom: '22px',
    overflow: 'hidden',
    position: 'relative',
    height:'40vh',
    boxShadow:'inset 0px 0px 7px gray',
    '&:after': {
        content: '""',
        position: 'absolute',
        // width: '157px',
        // height: '157px',
        // background: theme.palette.primary[200],
        borderRadius: '50%',
        top: '-105px',
        right: '-96px'
    }
}));

// ==============================|| PROGRESS BAR WITH LABEL ||============================== //

// function LinearProgressWithLabel({ value, ...others }) {
//     const theme = useTheme();


//     return (
//         <Grid container direction="column" spacing={1} sx={{ mt: 1.5 }}>
//             <Grid item>
//                 <Grid container justifyContent="space-between">
//                     <Grid item>
//                         <Typography variant="h6" sx={{ color: theme.palette.primary[800] }}>
//                             Properties
//                         </Typography>
//                     </Grid>
//                     <Grid item>
//                         <Typography variant="h6" color="inherit">{`${Math.round(value)}%`}</Typography>
//                     </Grid>
//                 </Grid>
//             </Grid>
//             <Grid item>
//                 <BorderLinearProgress variant="determinate" {...others} />
//             </Grid>
//         </Grid>
//     );
// }

// ==============================|| SIDEBAR MENU Card ||============================== //

const BrowserCard = ({template, handleClick}) => {
    // console.log('template', template);
   
    // const theme = useTheme();

    return (
        <>
            <Typography variant='h4'>Library</Typography>
        <CardStyle>
            <CardContent sx={{ p: 2 }}>
                {/* <List sx={{ p: 0, m: 0 }}>
                    <ListItem disableGutters sx={{ 
                        p: 0 ,
                        display:'flex',
                        flexDirection:'column',
                        alignItems:'start',}} 
                        >
                        {template?.map((item)=>(

                        <ListItemText
                        key={item?.id}
                            sx={{ mt: 0 }}
                            primary={
                                <Typography variant="subtitle1" sx={{ color: theme.palette.primary[800] }}>
                                   {item?.name}
                                </Typography>
                            }
                           
                        />
                        ))}
                    </ListItem>
                </List> */}
                <TreeView
        aria-label="file system navigator"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        {template?.map((item)=>{
            // console.log('item', item)
            return(
            <TreeItem key={item?.id} nodeId={item?.id} label={item?.name}>
                {item?.template?.nodes?.map((node)=>(
                    <TreeItem key={node?.id} nodeId={node?.id} label={node?.data?.label} onClick={()=>handleClick(node)}></TreeItem>
                ))
                }
                                
            </TreeItem>
        )})
}

      </TreeView>
            </CardContent>
        </CardStyle>
        </>
    );
};

export default BrowserCard;
