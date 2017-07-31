var foodieApp = angular.module('foodieApp',[]);  //initilization of angular app

foodieApp.controller('loginController',function($scope) {
})

foodieApp.controller('mainController',function($scope) {
	$scope.restaurants = [{
													id: 1,
													name: 'Uncle"s Chinese',
													address: '3 & 5, A/10, Meera Garden Society, Lane 7, Off North Mai....',
													location: 'Koregaon  Park',
													category: 'Casual Dining, Bar',
													vote: '4.0',
													noofvotes: '400 Votes',
													cuisines: 'Chinese, Thai',
													url: 'Uncle"s Chinese',
													cost: '700',
													hours: '11:30 AM to 11 PM (Mon-Sun)',
													image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3f-_yzrJq4F042m-9qIfSr_Ye69ncgDK9aZxtjwOph7ExEGZcdQ'
												},
												{
													id: 2,
													name: 'Idlicious',
													address: 'Cosmos Garden, Plot 16 and 17, P K Shroff Marg, Pancard Clubs Road, Baner, Pune',
													location: 'Baner',
													category: 'Quick Bites, Bar',
													vote: '4.2',
													noofvotes: '400 Votes',
													cuisines: 'South Indian',
													url: 'Idlicious',
													cost: '250',
													hours: '8:30 AM to 2:30 PM (Mon-Sat)',
													image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_dY-UiYvGUz5HSy3ATyR-2mBU5YD2L5QMj4dVu7lIAIHqAXSjAQ'
											},
											{
												id: 3,
												name: 'Cream California',
												address: '917/22, Opposite Hotel Roopali, FC Road, Pune',
												location: 'FC Road',
												category: 'Dessert Parlor',
												vote: '4.2',
												noofvotes: '260 Votes',
												cuisines: 'Ice Cream, Desserts',
												url: 'Cream California',
												cost: '1000',
												hours: '9 AM to 11:30 PM (Mon-Sun)',
												image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ9vqv4_9lvEhauSuO-_MdBG3Xyyd1-NI9rRLBnSQEOuy_E2kJjQ'
											},
											{
												id: 4,
												name: 'Taareef',
												address: '1, Shyamal Apartments, Next to Ozone, ITI Road, Aundh, New Delhi',
												location: 'Aundh',
												category: 'Casual Dining',
												vote: '3.9',
												noofvotes: '410 Votes',
												cuisines: 'North Indian, Street Food',
												url: 'Taareef',
												cost: '1200',
												hours: '11:30 AM to 11 PM (Mon-Sun)',
												image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4B-V8kaL4n-LtvPDmfby_h7IP9HRlt68-XSYRWee5TQR2ORPWoQ'
											},
											{
												id: 5,
												name: 'Farzi Cafe',
												address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
												location: 'Connaught Place',
												category: 'Casual Dining, Bar',
												vote: '4.2',
												cuisines: 'Modern Indian',
												cost: '2600',
												hours: '12 Noon to 1 AM (Mon-Sun)',
												image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
											},
											{
												id: 6,
												name: 'McDonals',
												address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
												location: 'Connaught Place',
												category: 'Casual Dining, Bar',
												vote: '4.2',
												cuisines: 'Modern Indian',
												cost: '2200',
												hours: '12 Noon to 1 AM (Mon-Sun)',
												image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
											},
											{
												id: 7,
												name: 'Burgrill',
												address: 'DSS 310, Sector 9, Panchkula',
												location: 'Sector 9, Panchkula',
												category: 'Quick Bites, Bar',
												vote: '4.0',
												noofvotes: '360 Votes',
												cuisines: 'Burger,Fast Food,Beverages',
												url: 'Burgrill',
												cost: '1500',
												hours: '12 Noon to 11 PM (Mon-Sun)',
												image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUL31oTqn07dDzIPDaE32-C8wKPenINJXMPEf82g1jQY0PF5PL'
											},
											{
												id: 8,
												name: 'Chessiano Pizza',
												address: 'Opposite Pantaloons, Senapati Bapat Road, Pune',
												location: 'Senapati Bapat Road',
												category: 'Quick Bites',
												vote: '3.3',
												noofvotes: '460 Votes',
												cuisines: 'Pizza',
												url: 'Chessiano Pizza',
												cost: '1800',
												hours: '11 AM to 1 AM (Mon-Sun)',
												image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk_TLf0yvTv4vaYBT93zC0a-HX7O2c7DzybqlMvpDbSfQxPXrxtA'
										}]
						});
