// Togle user settings
// ==================
var UserSettings = document.getElementById('navigation-user-settings');
if (document.getElementById('user-pic')) {
    document.getElementById('user-pic').addEventListener('click', function() {
        UserSettings.classList.toggle('active');
    });
}
if (document.getElementById('user-name')) {
    document.getElementById('user-name').addEventListener('click', function() {
        UserSettings.classList.toggle('active');
    });
}


// Togle navigation
// ==================
var mainNavigation = document.getElementById('main-navigation');
if (mainNavigation) {
    mainNavigation.addEventListener('click', function() {
        if (jQuery('body').hasClass('active-sm-navigation')) {
            document.body.classList.remove('active-sm-navigation');
        }
    });
}
if (document.getElementById('main-content')) {
    document.getElementById('main-content')
    .addEventListener('click', function() {
        if (!jQuery('body').hasClass('active-sm-navigation')) {
            document.body.classList.add('active-sm-navigation');
        }
    });
}

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
$('.SimpleMDE').each(function() {
    var simplemde = new SimpleMDE({
        element: this,
    });
    simplemde.render();
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
if (plannerServEditDone) {
    plannerServEditDone.addEventListener('click', function() {
        document.getElementById('viewPrayer').classList.remove('active');
    });
}

// Toggle Service Edit Add New
// ==================
var serviceEditAddNewButton = document.getElementById('service-edit-addnew');
var serviceEditEditCard = document.getElementById('service-edit-edit');
var serviceEditNewCancel = document.getElementById('service-edit-new-cancel');

if (serviceEditAddNewButton) {
    serviceEditAddNewButton.addEventListener('click', function() {
        serviceEditEditCard.classList.add('edit-add-new');
    });
}
if (serviceEditNewCancel) {
    serviceEditNewCancel.addEventListener('click', function() {
        serviceEditEditCard.classList.remove('edit-add-new');
    });
}

// Toggle plan-edit-nav
// ==================
var planEditElementsBtn = document.getElementById('plan-edit-nav-elements');
var planEditService = document.getElementById('plan-edit-service');
var planEditEdit = document.getElementById('service-edit-edit');
var planEditServiceBtn = document.getElementById('plan-edit-nav-service');
var planEditTogCate = document.getElementById('service-edit-toggle-categories');
var planEditCategories = document.getElementById('service-edit-categories');
if (planEditServiceBtn) {
    planEditServiceBtn.addEventListener('click', function() {
        planEditService.classList.add('active');
        planEditServiceBtn.classList.add('active');
        planEditEdit.classList.remove('active');
        planEditElementsBtn.classList.remove('active');
    });
}
if (planEditElementsBtn) {
    planEditElementsBtn.addEventListener('click', function() {
        planEditService.classList.remove('active');
        planEditServiceBtn.classList.remove('active');
        planEditEdit.classList.add('active');
        planEditElementsBtn.classList.add('active');
    });
}

if (planEditTogCate) {
    planEditTogCate.addEventListener('click', function() {
        planEditCategories.classList.toggle('active');
        planEditTogCate.classList.toggle('active');
    });
}


// Toggle plan-edit-contributor
// ==================
$('.planner-services-item .button-contributor').on('click', function(button) {
    $(this).parents( '.planner-services-item')
        .find('.custom-dropdown').toggleClass('active');
});

// guide-module
// ================
var guideModule = document.getElementsByClassName('guide-module')[0];
var guideModuleClose = document.getElementById('guide-module-close');
var guideModuleOpen = document.getElementsByClassName('guide-module-open');

if (guideModule) {
    setTimeout(function() {
        guideModule.classList.add('active');
    }, 1000);
}
if (guideModuleClose) {
    guideModuleClose.addEventListener('click', function() {
        guideModule.classList.remove('active');
    });
}
if (guideModuleOpen) {
    for (var key in guideModuleOpen) {
        if (guideModuleOpen.hasOwnProperty(key)) {
            var button = guideModuleOpen[key];
            button.addEventListener('click', function() {
                guideModule.classList.add('active');
            });
        }
    }
}

// Custom dropdown
// ==================
$('.custom-dropdown dt a').click(function() {
    $('.custom-dropdown dd ul').toggle();
});
$('.custom-dropdown dd ul li a').click(function() {
    var text = $(this).html();
    $('.custom-dropdown dt a span').html(text);
    $('.custom-dropdown dd ul').hide();
});
$(document).bind('click', function(e) {
    var $clicked = $(e.target);
    if (! $clicked.parents().hasClass('custom-dropdown')) {
        $('.custom-dropdown dd ul').hide();
    }
});

// .upload-album
// ==================
$('.upload-album-open').click(function() {
    event.preventDefault();
    $(this).parent().next( '.fullscreen' ).addClass('active');
});
$('.upload-album-fullsc-close').click(function() {
    event.preventDefault();
    $(this).parents('.fullscreen').removeClass('active');
});
