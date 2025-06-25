---
title: Custom Select Field with Modern CSS
date: 16th March, 2025
publish: true
poster: customized-select.png
---

Customizing the HTML `<select>` element has always been a challenge. Often we needed to rely on JavaScript or third-party libraries to get a consistent look. But now with only CSS, especially the new **`appearance: base-select`** property and related pseudo-elements, we can finally customise select fields with ease —no JavaScript required!

In this post, I’ll walk you through building a beautiful select field and show you how to style every part of it using pure CSS.

## **The HTML Structure**

Here’s the select field we’ll be working with:

```html
<div class="select-field">
	<label for="feeling">How are you feeling today?</label>
	<select id="feeling" name="feeling">
		<button>
			<selectedcontent></selectedcontent>
		</button>
		<option value="happy">😊 Happy</option>
		<option value="sad">😢 Sad</option>
		<option value="excited">🤩 Excited</option>
		<option value="angry">😡 Angry</option>
		<option value="surprised">😲 Surprised</option>
		<option value="bored">😐 Bored</option>
		<option value="tired">😴 Tired</option>
		<option value="confused">😕 Confused</option>
		<option value="love">😍 In Love</option>
		<option value="scared">😱 Scared</option>
	</select>
</div>
```

Notice the use of a **`<button>`** and a custom **`<selectedcontent>`** element inside the select. This allows us to style the selected option in a more flexible way.

## **Opting In to Custom Styling**

The first step is to opt in to custom select styling by using the new **`appearance: base-select`** property:

```css
select,
::picker(select) {
	appearance: base-select;
}
```

This tells the browser to use the new, customizable version of the select field, unlocking a range of new styling possibilities.

## **Styling the Select Field**

With the new appearance, you can style the select element just like any other input field

```css
select {
	border: 2px solid #d3d7da;
	background: #ffffff;
	height: 40px;
	min-width: 200px;
	display: flex;
	align-items: center;
	padding-left: 16px;
	padding-right: 16px;
	border-radius: 6px;
	transition: 0.4s;
	outline-color: #4263eb;

	&:focus-visible {
		outline-offset: 4px;
	}
}
```

## **Customizing the Picker Dropdown**

The **`::picker(select)`** pseudo-element allows you to style the dropdown itself.

```css
::picker(select) {
	border: 1px solid #d3d7da;
	border-radius: 6px;
	padding: 6px;
	top: calc(anchor(bottom) + 8px);
	left: anchor(0%);
}
```

The **`anchor()`** function lets you precisely position the dropdown relative to the select field.

## **Styling the Options**

You can style each `option` with focus, hover and checked state.

```css
option {
	display: flex;
	justify-content: flex-start;
	gap: 16px;
	background: #ffffff;
	padding: 4px 12px;
	transition: 0.4s;
	border-radius: 6px;
	outline-color: #4263eb;

	&:focus-visible {
		outline-offset: 2px;
	}

	&:hover,
	&:focus {
		background: #efefef;
	}

	&:checked {
		background: #2979ff;
		color: #ffffff;
	}

	&::checkmark {
		order: 1;
		margin-left: auto;
		content: '✔';
	}
}
```

Show a custom checkmark for the selected option using the **`::checkmark`** pseudo-element.

## **Customizing the Selected Content**

The **`<selectedcontent>`** element inside the button can also be styled, letting you control the layout of the selected option.

```css
selectedcontent {
	display: flex;
	gap: 8px;
}
```

## **Animating the Picker**

With the new popover and animation features, you can smoothly animate the dropdown as it opens and closes:

```css
::picker(select) {
	transition: all 0.4s allow-discrete;
	opacity: 0;
}

::picker(select):popover-open {
	opacity: 1;
	top: calc(anchor(bottom) + 8px);
}

@starting-style {
	::picker(select):popover-open {
		opacity: 0;
		top: calc(anchor(bottom) + 30px);
	}
}
```

## **Styling the Picker Icon**

Even the dropdown arrow can be styled and animated:

```css
select::picker-icon {
	color: #999;
	transition: 0.4s rotate;
}
select:open::picker-icon {
	rotate: 180deg;
}
```

## **Conclusion**

With these new CSS features, customizing a select field is easier and more powerful than ever. You can control every aspect of the select, from the field itself to the dropdown, options, and icons. This unlocks a world of creative UI possibilities.

Hope you learned something.
