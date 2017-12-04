// Togle user settings
// ==================
var UserSettings = document.getElementById('navigation-user-settings');
document.getElementById('user-pic').addEventListener('click', function() {
    UserSettings.classList.toggle('active');
});
document.getElementById('user-name').addEventListener('click', function() {
    UserSettings.classList.toggle('active');
});

// Togle navigation
// ==================
var mainNavigation = document.getElementById('main-navigation');
mainNavigation.addEventListener('click', function() {
    if (jQuery('body').hasClass('active-sm-navigation')) {
        document.body.classList.remove('active-sm-navigation');
    }
});
document.getElementById('main-content').addEventListener('click', function() {
    if (!jQuery('body').hasClass('active-sm-navigation')) {
        document.body.classList.add('active-sm-navigation');
    }
});
window.addEventListener('resize', function() {
    if (window.innerWidth >= 768) {
        document.body.classList.add('active-sm-navigation');
    }
});

// Navigation title clicked
$('#main-navigation .menu > li .title a').on('click', function() {
    var isChildMenu = $(this).find('ul.visible-desktop').length > 0;
    $(this).closest('li').toggleClass('active');

    if (isChildMenu) {
        return false;
    }
});

// Toggle main table items (mobile)
// ==============
var prayersListPrayer = document.querySelectorAll('.maintable-list tr');
prayersListPrayer.forEach(function(prayer) {
    prayer.addEventListener('click', function() {
        event.preventDefault();
        prayer.classList.toggle('active');
    });
});


// Togle any Add module
// ==============
var addModule = document.getElementById('addModule');
var addModuleContent = document.getElementById('addModuleContent');
var addModuleOverlay = document.getElementById('addModuleOverlay');
var addModuleClose = $('.closeAddModule');
var addModuleOpen = $('.openAddModule');

var showAddModule = function() {
    // event.preventDefault();
    addModule.classList.add('active');
    addModuleContent.removeEventListener('click', showAddModule);
};
var hideAddModule = function() {
    // event.preventDefault();
    addModule.classList.remove('active');
    setTimeout(function() {
        addModuleContent.addEventListener('click', showAddModule);
     }, 1000);
};
if (addModule) {
    addModuleClose.on('click', hideAddModule);
    addModuleOpen.on('click', showAddModule);
    addModuleContent.addEventListener('click', showAddModule);
    addModuleOverlay.addEventListener('click', hideAddModule);
    document.querySelectorAll('.maintable-list .title a')
    .forEach(function(listItem) {
    listItem.addEventListener('click', showAddModule);
});
}

// SimpleMDE
// ==================
var InputDescription = new SimpleMDE({
    element: document.getElementById('InputContent'),
});


// Sort categories form
// ==================
/*
var settingsCategoriesList = document.getElementById('settings-categories');
var settingsCategoriesListSort = new Sortable(settingsCategoriesList, {
    // options

    // ms, animation speed moving items when sorting, `0` — without animation
    animation: 150,
    ghostClass: 'ghost',
});
settingsCategoriesListSort;
*/

// Toggle service edit
// ==================
var plannerServEditDone = document.getElementById('planner-service-edit-done');
plannerServEditDone.addEventListener('click', function() {
    document.getElementById('viewPrayer').classList.remove('active');
});


// Toggle Service Edit Add New
// ==================
var serviceEditAddNewButton = document.getElementById('service-edit-addnew');
var serviceEditEditCard = document.getElementById('service-edit-edit');
var serviceEditNewCancel = document.getElementById('service-edit-new-cancel');

serviceEditAddNewButton.addEventListener('click', function() {
    serviceEditEditCard.classList.add('edit-add-new');
});
serviceEditNewCancel.addEventListener('click', function() {
    serviceEditEditCard.classList.remove('edit-add-new');
});

// Toggle plan-edit-nav
// ==================
var planEditElementsBtn = document.getElementById('plan-edit-nav-elements');
var planEditService = document.getElementById('plan-edit-service');
var planEditEdit = document.getElementById('service-edit-edit');
var planEditServiceBtn = document.getElementById('plan-edit-nav-service');
var planEditTogCate = document.getElementById('service-edit-toggle-categories');
var planEditCategories = document.getElementById('service-edit-categories');
planEditServiceBtn.addEventListener('click', function() {
    planEditService.classList.add('active');
    planEditServiceBtn.classList.add('active');
    planEditEdit.classList.remove('active');
    planEditElementsBtn.classList.remove('active');
});
planEditElementsBtn.addEventListener('click', function() {
    planEditService.classList.remove('active');
    planEditServiceBtn.classList.remove('active');
    planEditEdit.classList.add('active');
    planEditElementsBtn.classList.add('active');
});
planEditTogCate.addEventListener('click', function() {
    planEditCategories.classList.toggle('active');
    planEditTogCate.classList.toggle('active');
});

// Toggle plan-edit-contributor
// ==================
$('.planner-services-item .button-contributor').on('click', function(button) {
    $(this).parents( '.planner-services-item')
        .find('.dropdown').toggleClass('active');
});


