$(function () {
    $('#label_text').hide();
    $('#input_text').hide();
    $('#button_text').hide();
    $('#form_text').hide();
    $('.help-block').hide();
});

$('#label').click(function () {
    $('#label_text').show("slow");
});

$('#input').click(function () {
    $('#input_text').show("slow");
});

$('#button').click(function () {
    $('#button_text').show("slow");
});
$('#form').click(function () {
    $('#form_text').show("slow");
});

$('#label_no').click(function () {
    $('#label_div').removeClass('has-error');
    $('#empty_label').hide("fast");
    $('#label_text').hide("fast");
});

$('#input_no').click(function () {
    $('#input_text').hide("fast");
});

$('#button_no').click(function () {
    $('#button_text').hide("fast");
});
$('#form_no').click(function () {
    $('#form_text').hide("fast");
});

$('#label_ok').click(function () {
    if ($('#label_input').val() !== '') {
        var x = $('<div class="form-group col-lg-12"><label class="control-label">' + $('#label_input').val() + '</label></div>');
        x.appendTo($('#my_form'));
        $('#label_input').val('');
        $('#label_div').removeClass('has-error');
        $('#empty_label').hide("fast");
        $('#label_text').hide("fast");
    }
    else {
        $('#empty_label').show("slow");
        $('#label_div').addClass('has-error');

    }
});

$('#form_ok').click(function () {
    if ($('#form_input').val() !== '') {
        $('#forms_name').html($('#form_input').val());
        $('#my_form').attr('method', $('#form_input2').val());
        $('#form_input').val('');
        $('#form_text').hide("fast");
    }
});

$('#input_ok').click(function () {
    var x = $('<input class="form-control" type="' + $('#input_input2').val() + '" placeholder="' + $('#input_input').val() + '">');
    x.insertAfter($('#my_form label:last'));
    $('#input_input').val('');
    $('#input_text').hide("fast");
});

$('#button_ok').click(function () {
    var x = $('<div class="box-footer col-lg-12"><button class="btn btn-success no_submit">' + $('#button_input').val() + '</button></div>');
    x.appendTo($('#my_form'));
    $('#button_input').val('');
    $('#button_text').hide("fast");
});

$('#button_auto').click(function () {
    var x = $('<div class="box-footer col-lg-12">\n' +
        '                <button value="submit" class="btn btn-success pull-right ">Submit</button>\n' +
        '                <button value="reset" class="btn btn-light " >Reset</button>\n' +
        '            </div>');
    x.appendTo($('#my_form'));
    $('#button_input').val('');
    $('#button_text').hide("fast");
});

$('.no_submit').click(function (e) {
    console.log('jj');
    e.preventDefault();
});

$('#animations_disable').click(function () {
    jQuery.fx.off=true;
    $('#dis_anim_div').hide();
});

$('#close_disable').click(function () {
    $('#dis_anim_div').hide();
});

$('.word').hover(function (keyframes, options) {
    $(this).animate({'font-size':  50}, {duration: "slow",queue: false})
},function (keyframes, options) {
    $(this).animate({'font-size':  20}, {duration: "slow",queue: false})
});