/* Javascript */
jQuery(document).on('click', '.az-link-links-block-link', function () {
	jQuery('.az-link-links-block-link').removeClass('current');
	jQuery('.az-list-container').hide();
	jQuery( this ).addClass('current');
	if (jQuery(this).data('link') == 'all')
		jQuery('.az-list-container').show();
	else if (jQuery(this).data('link') == '09')
		jQuery('.az-list-container[data-link="09"]').show();
	else
		jQuery('.az-list-container[data-link='+jQuery(this).data('link')+']').show();
})