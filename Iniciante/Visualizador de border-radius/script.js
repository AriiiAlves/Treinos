var adjust = false;
var ctrl2Y = 0, ctrl4Y = 0;

function check(){
    let check = document.getElementById('advanced_check');
    let settings = document.getElementById('advanced_settings');

    if(settings.style.visibility == 'hidden' || settings.style.visibility == ''){
        check.style.marginLeft = '22px';
        check.style.backgroundColor = '#ff0076';
        check.style.borderColor = '#ff0076';
        settings.style.visibility = 'visible';
        settings.style.opacity = 1;

        changeViewSize();
    }
    else{
        let ctrl1 = document.getElementById('controller1');
        let ctrl2 = document.getElementById('controller2');
        let ctrl3 = document.getElementById('controller3');
        let ctrl4 = document.getElementById('controller4');
        let view  = document.getElementById('generator_shape');
        let view_border = document.getElementById('generator');
        let controls_border = document.getElementById('generator_controllers');
        let width = document.getElementById('width');
        let height = document.getElementById('height');

        check.style.marginLeft = '1px';
        check.style.backgroundColor = 'rgb(31, 0, 25)';
        check.style.borderColor = 'rgb(31, 0, 25)';

        settings.style.visibility = 'hidden';
        settings.style.opacity = 0;

        width.value = 400;
        height.value = 400;

        view.style.width = '50vmin';
        view_border.style.width = '50vmin';
        controls_border.style.width = '52vmin';

        view.style.height = '50vmin';
        view_border.style.height = '50vmin';
        controls_border.style.height = '52vmin';

        ctrl1.style.width = '52vmin';
        ctrl2.style.width = '52vmin';
        ctrl3.style.width = '52vmin';
        ctrl4.style.width = '52vmin';

        ctrl2.style.transform = 'translateX(48%) translateY(15%) rotate(90deg)';
        ctrl4.style.transform = 'translateX(-48%) translateY(-15%) rotate(270deg)';

        adjust = false;
    }
}

function copy() {
    let field = document.getElementById("border-radius");
    field.select();
  
    try {
        navigator.clipboard.writeText('border-radius: ' + field.value + ";");
        alert("Texto copiado!");
    } catch (err) {
        console.error('Erro ao copiar: ', err);
      }
}

document.addEventListener('DOMContentLoaded', function() {
    let ctrl1 = document.getElementById('controller1');
    let ctrl2 = document.getElementById('controller2');
    let ctrl3 = document.getElementById('controller3');
    let ctrl4 = document.getElementById('controller4');

    ctrl1.addEventListener('input', function() {
        let ctrl1 = document.getElementById('controller1');
        let ctrl2 = document.getElementById('controller2');
        let ctrl3 = document.getElementById('controller3');
        let ctrl4 = document.getElementById('controller4');
        let view = document.getElementById('generator_shape');
        let clipboard = document.getElementById('border-radius');
        view.style.borderRadius = `${ctrl1.value}% ${100 - ctrl1.value}% ${ctrl3.value}% ${100 - ctrl3.value}% / ${100 - ctrl4.value}% ${ctrl2.value}% ${100 - ctrl2.value}% ${ctrl4.value}%`;
        clipboard.value = `${ctrl1.value}% ${100 - ctrl1.value}% ${ctrl3.value}% ${100 - ctrl3.value}% / ${100 - ctrl4.value}% ${ctrl2.value}% ${100 - ctrl2.value}% ${ctrl4.value}%`;
    });
    ctrl2.addEventListener('input', function() {
        let ctrl1 = document.getElementById('controller1');
        let ctrl2 = document.getElementById('controller2');
        let ctrl3 = document.getElementById('controller3');
        let ctrl4 = document.getElementById('controller4');
        let view = document.getElementById('generator_shape');
        let clipboard = document.getElementById('border-radius');
        view.style.borderRadius = `${ctrl1.value}% ${100 - ctrl1.value}% ${ctrl3.value}% ${100 - ctrl3.value}% / ${100 - ctrl4.value}% ${ctrl2.value}% ${100 - ctrl2.value}% ${ctrl4.value}%`;
        clipboard.value = `${ctrl1.value}% ${100 - ctrl1.value}% ${ctrl3.value}% ${100 - ctrl3.value}% / ${100 - ctrl4.value}% ${ctrl2.value}% ${100 - ctrl2.value}% ${ctrl4.value}%`;
    });  
    ctrl3.addEventListener('input', function() {
        let ctrl1 = document.getElementById('controller1');
        let ctrl2 = document.getElementById('controller2');
        let ctrl3 = document.getElementById('controller3');
        let ctrl4 = document.getElementById('controller4');
        let view = document.getElementById('generator_shape');
        let clipboard = document.getElementById('border-radius');
        view.style.borderRadius = `${ctrl1.value}% ${100 - ctrl1.value}% ${ctrl3.value}% ${100 - ctrl3.value}% / ${100 - ctrl4.value}% ${ctrl2.value}% ${100 - ctrl2.value}% ${ctrl4.value}%`;
        clipboard.value = `${ctrl1.value}% ${100 - ctrl1.value}% ${ctrl3.value}% ${100 - ctrl3.value}% / ${100 - ctrl4.value}% ${ctrl2.value}% ${100 - ctrl2.value}% ${ctrl4.value}%`;
    });  
    ctrl4.addEventListener('input', function() {
        let ctrl1 = document.getElementById('controller1');
        let ctrl2 = document.getElementById('controller2');
        let ctrl3 = document.getElementById('controller3');
        let ctrl4 = document.getElementById('controller4');
        let view = document.getElementById('generator_shape');
        let clipboard = document.getElementById('border-radius');
        view.style.borderRadius = `${ctrl1.value}% ${100 - ctrl1.value}% ${ctrl3.value}% ${100 - ctrl3.value}% / ${100 - ctrl4.value}% ${ctrl2.value}% ${100 - ctrl2.value}% ${ctrl4.value}%`;
        clipboard.value = `${ctrl1.value}% ${100 - ctrl1.value}% ${ctrl3.value}% ${100 - ctrl3.value}% / ${100 - ctrl4.value}% ${ctrl2.value}% ${100 - ctrl2.value}% ${ctrl4.value}%`;
    });
});

function changeViewSize(){
    let view  = document.getElementById('generator_shape');
    let view_border = document.getElementById('generator');
    let controls_border = document.getElementById('generator_controllers');
    let width = document.getElementById('width');
    let height = document.getElementById('height');

    let ctrl1 = document.getElementById('controller1');
    let ctrl2 = document.getElementById('controller2');
    let ctrl3 = document.getElementById('controller3');
    let ctrl4 = document.getElementById('controller4');

    view.style.width = `${width.value - 4}px`;
    view_border.style.width = `${width.value}px`;
    controls_border.style.width = `${width.value}px`;

    view.style.height = `${height.value - 3.5}px`;
    view_border.style.height = `${height.value}px`;
    controls_border.style.height = `${height.value}px`;

    ctrl1.style.width = `${width.value}px`;
    ctrl2.style.width = `${height.value}px`;
    ctrl3.style.width = `${width.value}px`;
    ctrl4.style.width = `${height.value}px`;

    if(adjust == false){
        ctrl2Y = 0;
        ctrl4Y = 0;

        ctrl2.style.transform = `translateX(49%) translateY(${ctrl2Y}px) rotate(90deg)`;
        ctrl4.style.transform = `translateX(-49%) translateY(${ctrl4Y}px) rotate(270deg)`;

        adjust = true;
    }
    else{
        if(height.value > 300){
            ctrl2Y = 0 + ((height.value - 400) / 2);
            ctrl4Y = 0 - ((height.value - 400) / 2);
        }
        else if(height == 300){
            ctrl2Y = 0;
            ctrl4Y = 0;
        }
        else{
            ctrl2Y = 0 - ((400 - height.value) / 2);
            ctrl4Y = 0 + ((400 - height.value) / 2);
        }

        ctrl2.style.transform = `translateX(49%) translateY(${ctrl2Y}px) rotate(90deg)`;
        ctrl4.style.transform = `translateX(-49%) translateY(${ctrl4Y}px) rotate(270deg)`;
    }
};