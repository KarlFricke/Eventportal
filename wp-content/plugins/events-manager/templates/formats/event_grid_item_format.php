<div class="em-event em-item" data-href="#_EVENTURL" style="--default-border:#_CATEGORYCOLOR;">
	<div class="em-item-image {no_image}has-placeholder{/no_image}">
		<div class="em-item-image-wrapper">
			{has_image}
			#_EVENTIMAGE{medium}
			{/has_image}
			{no_image}
			<div class="em-item-image-placeholder">
				<div class="date">
					<span class="day">#d</span>
					<span class="month">#M</span>
				</div>
			</div>
			{/no_image}
		</div>
	</div>
	<div class="em-item-info">
		<h3 class="em-item-title">#_EVENTLINK</h3>
		<div class="em-event-meta em-item-meta">
			<div class="em-item-meta-line em-event-date em-event-meta-datetime">
				<span class="em-icon-calendar em-icon"></span>
				#_EVENTDATES
			</div>
			<div class="em-item-meta-line em-event-time em-event-meta-datetime">
				<span class="em-icon-clock em-icon"></span>
				#_EVENTTIMES
			</div>
			{bookings_open}
			<div class="em-item-meta-line em-event-prices">
				<span class="em-icon-ticket em-icon"></span>
				#_EVENTPRICERANGE
			</div>
			{/bookings_open}
			{has_location_venue}
			<div class="em-item-meta-line em-event-location">
				<span class="em-icon-location em-icon"></span>
				#_LOCATIONLINK
			</div>
			{/has_location_venue}
			{has_event_location}
			<div class="em-item-meta-line em-event-location">
				<span class="em-icon-at em-icon"></span>
				#_EVENTLOCATION
			</div>
			{/has_event_location}
		</div>
	</div>
</div>