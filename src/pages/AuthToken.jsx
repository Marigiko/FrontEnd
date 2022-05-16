import { Box, Button, Typography, Grid, TextField } from '@mui/material';

const AuthToken = () => {
	return (
		<Box
			sx={{
				width: '70%',
				height: '70%',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				gap: '2rem',
			}}
		>
			<Typography
				variant='h4'
				sx={{
					textAlign: 'center',
				}}
			>
				Please enter the One Time Password (OTP) generated by your Microsoft
				Authenticator App.
			</Typography>
			<Box
				sx={{
					width: '100%',
				}}
			>
				<Grid container spacing={1}>
					<Grid item xs={3}></Grid>
					<Grid item xs={1}>
						<TextField
							hiddenLabel
							id='filled-hidden-label-small'
							variant='outlined'
						/>
					</Grid>
					<Grid item xs={1}>
						<TextField
							hiddenLabel
							id='filled-hidden-label-small'
							variant='outlined'
						/>
					</Grid>
					<Grid item xs={1}>
						<TextField
							hiddenLabel
							id='filled-hidden-label-small'
							variant='outlined'
						/>
					</Grid>
					<Grid item xs={1}>
						<TextField
							hiddenLabel
							id='filled-hidden-label-small'
							variant='outlined'
						/>
					</Grid>
					<Grid item xs={1}>
						<TextField
							hiddenLabel
							id='filled-hidden-label-small'
							variant='outlined'
						/>
					</Grid>
					<Grid item xs={1}>
						<TextField
							hiddenLabel
							id='filled-hidden-label-small'
							variant='outlined'
						/>
					</Grid>
					<Grid item xs={3}></Grid>
				</Grid>
			</Box>
			<Button
				variant='contained'
				sx={{
					width: '30%',
					height: '45px',
					fontWeight: '700',
					fontSize: '20px',
					textTransform: 'capitalize',
				}}
			>
				Verify
			</Button>
		</Box>
	);
};

export default AuthToken;