//
// Top bar 
const $topBar = document.getElementById('header');
mdc.topAppBar.MDCTopAppBar.attachTo($topBar);


// Menu ( Sidebar )
const $sidebar = document.getElementById('sidebar');
const drawer = mdc.drawer.MDCDrawer.attachTo($sidebar);

const $menuBtn = document.getElementById('menu-btn');
$menuBtn.addEventListener('click', function() {
	drawer.open = (!drawer.open);
});

const $menuList = document.querySelector('#sidebar .mdc-list');
$menuList.addEventListener('click', (event) => {
 	drawer.open = false;
});

// Tabs
const $tab = document.querySelector('.mdc-tab');
const tab = mdc.tab.MDCTab.attachTo($tab);


const $tabBar = document.querySelector('.mdc-tab-bar');
const tabBar = mdc.tabBar.MDCTabBar.attachTo($tabBar);
$tabBar.addEventListener('MDCTabBar:activated', function(e) {
	tabBar.activeTab = e.detail.index
	$('.custom-tab-content-item').removeClass('active');
	$('.custom-tab-content-item').eq(tabBar.activeTab).addClass('active');
});

$('.custom-tab-content-item').on('swipeleft',  function(){
	
});


const $tabIndicator = document.querySelector('.mdc-tab-indicator');
const tabIndicator = mdc.tabIndicator.MDCTabIndicator.attachTo($tabIndicator);

const $tabScroller = document.getElementById('tab-scroller');
const tabScroller = mdc.tabScroller.MDCTabScroller.attachTo($tabScroller);


// Footer
const bottomNavBtns = document.querySelectorAll('.bottom-nav-option button');
for ( var i = 0; i < bottomNavBtns.length; i ++ ) {
	mdc.ripple.MDCRipple.attachTo(bottomNavBtns[i]);
}