<script>
    function redirectToGoogleReview() {
        let userComment = document.getElementById('userComment').value;
        if (userComment) {
            alert('Thank you for your feedback! You will now be redirected to Google Reviews.');
            window.open('https://maps.app.goo.gl/qYbicMgP83vV5crv6', '_blank');
        } else {
            alert('Please enter your comment before submitting.');
        }
    }
</script>
